import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular'
import { Storage } from '@ionic/storage'
import { Http } from '@angular/http';
import { IpCookie } from './ipCookie';
import { config } from '../config';
//import { Storage} from './storage'


@Injectable()
export class Auth{
    private ipCookie:IpCookie=new IpCookie();
    private isLoginShow=false;
    constructor(private http:Http,private storage:Storage,private events: Events) {
    }
    /**存储用户信息 */
    setUser(user:string, rememberChecked:boolean) {
        rememberChecked ?
            this.ipCookie.setCookie('userName', user, config.cookie.expireDay) :
            this.ipCookie.setCookie('userName', user);
    };

    private setToken (token:string, rememberChecked:boolean) {
        rememberChecked ?
        this.ipCookie.setCookie('userId', token, config.cookie.expireDay) :
        this.ipCookie.setCookie('userId', token);
    };

    private getToken () {
        return this.ipCookie.getCookie('userId');
    };
    /**定时检索用户登陆信息是否过期 */
    checkTimeout = function() {
        this.isLoggedInTimeOut();
		
    };
    private isLoggedInTimeOut(){
        //console.log("检测登陆")
        if(this.isLoggedIn()){
            setTimeout(() => {
                this.isLoggedInTimeOut();
            },1000);
        }else{
            this.logout();
        }

        // return ;
        // this.http.get(config.baseUrl + "", {
		// 	params: {token: this.getToken()}
		// }).subscribe(
        //     data => {
        //         if(!data.status){
        //             this.logout()
        //         }else{
        //             setTimeout(this.isLoggedInTimeOut,1000);
        //         }
        //         console.log("login success>"+data);
        //     },
        //     error => {
        //         this.logout();
        //     }
        // );
    }
    /**获取登陆用户名 */
    getUser() {
        return this.ipCookie.getCookie('userName');
    };
    /**判断用户是否登陆 */
    isLoggedIn() {
        if (this.getToken()) {
            return true;
        }
        return false;
    };
    /** 获取用户token*/
    getUserId() {
        return this.getToken();
    };
    /**
     * 登陆成功调用
     */
    login(user:userInfo) {
        console.log("登陆成功：baseUrl:"+config.baseUrl);
        
        this.setUser(user.userName, user.rememberMe);
        this.setToken(user.userId, user.rememberMe);
        
        // 清除localStorage中的数据
        this.storage.clear();	
        // 清除sessionStorage缓存中的数据
        sessionStorage.clear();
        this.isLoggedInTimeOut();
        this.isLoginShow=false;
    };
    /**
     * 退出登陆调用
     */
    logout() {
        if(this.isLoginShow)return;
        this.ipCookie.remove('userName');
        this.ipCookie.remove('userId');
        // 清除localStorage中的数据
        this.storage.clear();
        // 清除sessionStorage缓存中的数据
        sessionStorage.clear();
        //退出登陆
        this.events.publish('user:logout');
        this.isLoginShow=true;
    };
}
export class userInfo{
    userName:string;
    userId:string;
    rememberMe:boolean;
}


import { Injectable } from '@angular/core';
import { Auth } from '../services/auth'
@Injectable()
export class guardsPage {
    constructor(private auth:Auth) { }
    /**
     * 视图可以离开之前运行。这可以用作认证视图中的一种“警卫”，您需要在视图离开之前检查权限
     */
    // ionViewCanLeave(): boolean{
    //     if(true){
    //        return true;
    //     } else {
    //        return false;
    //     }
    // }
    /**
     * 在视图可以进入之前运行。这可以用作认证视图中的一种“警卫”，您需要在视图进入之前检查权限
     */
    ionViewCanEnter(): boolean{
        console.log("ionViewCanEnter")
        if(!this.auth.isLoggedIn()){
            //重新登陆
            this.auth.logout();
            this.auth.logout();
           return false;
        } else {
           return true;
        }
    }
}
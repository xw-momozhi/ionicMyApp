import { Component,ViewChild } from '@angular/core';
import { Platform ,Events,NavController,Nav,ModalController,ModalOptions} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/navPage/tabs';
import { LoginPage } from '../pages/login/login';
import { Auth } from './services/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:NavController;
  rootPage:any;
  constructor(platform: Platform,statusBar: StatusBar, splashScreen: SplashScreen,private auth:Auth, events: Events,mainCtrl:ModalController) {
    platform.ready().then(() => {
      this.rootPage=TabsPage;
      
      //退出登陆时触发
      events.subscribe('user:logout', () => {
          let opts:ModalOptions={
            showBackdrop: true,
            enableBackdropDismiss: true,
            //enterAnimation: "1 ",
            //leaveAnimation: "2 ",
            cssClass: "fand-in"
          };
         
          //弹出登陆模态框
          let modal =mainCtrl.create(LoginPage,{},opts);
          modal.present();
      });
      this.isLogin();


      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  //检测是否已登陆 未登陆则跳登陆页
  private isLogin(){
      if(this.auth.isLoggedIn()){
       
        this.auth.checkTimeout();
      }else{
        this.auth.logout();
      }
  }
  logout=function(){
    this.auth.logout();
  }
}

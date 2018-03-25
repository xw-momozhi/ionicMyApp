import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,Animation } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';//有这个才能用http请求

// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { TabsPage } from '../pages/tabs/tabs';
import { navPageModule } from '../pages/navPage/nav.page.module';
import { userModule } from '../pages/userPage/user.module';
import { LoginPageModule } from '../pages/login/login.module';

import { IpCookie } from './services/ipCookie';
import { Auth } from '../app/services/auth';
import { IonicStorageModule } from '@ionic/storage';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MyApp,
    // TabsPage,
    // AboutPage,
    // ContactPage,
    // HomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    //IonicModule.forRoot(TabsPage)
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',//是否隐藏子页上的选项卡。如果“真”，它不会显示子页面上的选项卡。
      backButtonText:'',//返回文字
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out', 
     // iconMode :'ios',//所有图标样式为iOS
      pagetransition:'ios-transition',
      swipeBackEnabled:true,//是否启用原生iOS刷回去功能。
    }),
    navPageModule,
    LoginPageModule,
    userModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // TabsPage,
    // AboutPage,
    // ContactPage,
    // HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IpCookie,
    Auth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

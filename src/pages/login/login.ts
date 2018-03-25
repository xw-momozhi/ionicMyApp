import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations'
import { IonicPage, NavController, NavParams ,Animation} from 'ionic-angular';
import { TabsPage} from '../navPage/tabs';
import { Auth,userInfo } from '../../app/services/auth';
import { config } from '../../app/config';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:Auth) {

      // var wrapper =animation;
      // wrapper.beforeStyles({ 'opacity': 1 });
      // wrapper.fromTo('translateY', '100%', '0%');


      // animation
      //   .easing('cubic-bezier(0.36,0.66,0.04,1)')
      //   .duration(400)
      //   .add(wrapper);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    let userinfo: string = '用户名：' + username.value  + '密码：' + password.value;
    let user:userInfo={
       userId:"123456",
       userName:username.value ,
       rememberMe:true
    };
    config.baseUrl="123145646";
    this.auth.login(user);
    this.navCtrl.pop();
    
  }
  ionViewCanEnter(){
    // here we can either return true or false
    // depending on if we want to leave this view
    //debugger;
    // if(this.navCtrl.isActive('page-login')){
    //    return true;
    //  } else {
    //    return false;
    //  }
  }
}

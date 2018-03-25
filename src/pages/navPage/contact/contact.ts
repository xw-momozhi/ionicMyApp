import { Component,ViewChild } from '@angular/core';
import { NavController,Nav,ModalController } from 'ionic-angular';
import {messagePage} from '../../userPage/userMessage/message.page'
import {LoginPage} from '../../login/login'


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage  {
  @ViewChild(Nav) nav:Nav;
  constructor(public navCtrl: NavController,public mainCtrl:ModalController) {
  }
  goMessage(){
    this.navCtrl.push(messagePage);
    // let modal = this.mainCtrl.create(LoginPage);
    // modal.present();
  }
}

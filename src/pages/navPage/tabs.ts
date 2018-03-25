
import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Tabs } from 'ionic-angular';
import { AboutPage } from './about/about';
import { ContactPage } from './contact/contact';
import { HomePage } from './home/home';


@Component({
  selector: 'tab-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  navTab=[{
    root:HomePage,
    pageName:"首页",
    icon:"home"
  },{
    root:AboutPage,
    pageName:"申购",
    icon:"paper"
  },{
    root:ContactPage,
    pageName:"入库",
    icon:"download"
  },{
    root:ContactPage,
    pageName:"库存",
    icon:"cube"
  },{
    root:ContactPage,
    pageName:"报表",
    icon:"pulse"
  }]
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}

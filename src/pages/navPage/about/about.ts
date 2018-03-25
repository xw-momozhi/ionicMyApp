import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { itemState } from '../../../app/animations/animation'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  animations: [//modal-slide-in [@itemState]="someVar"
     itemState
  ]
})
export class AboutPage {
  constructor(public navCtrl: NavController) {
  }
  items:any=[]
  addItem(){
      this.items.push({name:"按钮1"});
  }
  removeItem(item){
    this.items.splice(this.items.indexOf(item), 1);
  }
}

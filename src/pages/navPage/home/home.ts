import { Component } from '@angular/core';
import { NavController,MenuController,ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  constructor(public navCtrl: NavController,public menuCtrl: MenuController,private actionSheetCtrl:ActionSheetController) {
  }
//   当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发
//  ionViewDidLoad(){
//     console.log("1.0 ");
//  }
  // //ionViewWillEnter 顾名思义，当将要进入页面时触发
  // ionViewWillEnter(){
  //     console.log("2.0 ");
  // }
  //ionViewDidEnter 当进入页面时触发
  ionViewDidEnter(){
    //设置左边用户菜单可看
    this.menuCtrl.enable(true, 'userMenu');
    
  }
  // //ionViewWillLeave 当将要从页面离开时触发
  // ionViewWillLeave(){
  //     console.log("4.0 ");
  // }
  //ionViewDidLeave 离开页面时触发
  ionViewDidLeave(){
    //离开时设置左边用户菜单不可看
    this.menuCtrl.enable(false, 'userMenu');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '操作列表',
      buttons: [
        {
          text: '文档',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}

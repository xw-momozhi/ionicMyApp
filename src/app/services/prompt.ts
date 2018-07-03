import { Injectable} from '@angular/core';
import { AlertController,LoadingController,Loading} from 'ionic-angular';

@Injectable()
export class Prompt{
    constructor(private alertCtrl:AlertController,private loadingCtrl:LoadingController) {
    }
     /**
     * 选择弹出框
     * @param title 标题
     * @param dataList 选择数据 数据类型 [{name:'',id:''}] 
     * @param source 选中数据 id 
     * @param callBlock 选中回调
     */
    selectPop(title:string,dataList:any,source:string,callBlock:(data:any)=>void){
        let options=[]
        dataList.forEach((value)=>{
        options.push({
            type: 'radio',
            label: value.name,
            value:value,
            checked: source==value.id,
            handler:function(){
                if(this.checked==false){
                    alert.data.inputs[0].checked=false;
                    }
                }
            })
        })
        let alert = this.alertCtrl.create({
            title:title,
            inputs:options,
            buttons:[{
            text:"取消",
            },{
            text: '确认',
            handler: (data: any) => {
                callBlock(data)
            }
            }]
        });
        alert.present();
    }
    /**
     * 
     * @param messageTitle 消息标题
     * @param messageInfo  消息内容
     * @param callback  点击确认回调
     * @param callback2  点取消回调
     */
    showConfirm(messageTitle: string, messageInfo: string,callback?:()=>void,callback2?:()=>void) {
        let alert = this.alertCtrl.create({
            title: messageTitle,
            message: messageInfo,
            buttons: [{
                text: '取消',
                role: 'cancel',
                handler: () => {
                if(callback2)callback2();
                }
            },{
                text: '确认',
                handler: () => {
                if(callback)callback();
                }
            }]
        });
        alert.present();
    }
    /** 
    * @param messageTitle 消息标题
    * @param messageInfo  消息内容
    * @param callback  点击确认回调
    */
    showAlert(messageTitle: string, messageInfo: string,callback?:()=>void) {
        let alert = this.alertCtrl.create({
            enableBackdropDismiss:false,
            title: messageTitle,
            message: messageInfo.replace(/\n+/g,"<br/>"),
            buttons: [{
                text: '确认',
                handler: () => {
                if(callback)callback();
                }
            }]
        });
        alert.present();
    }
    /**
     * 加载中
     * @param callback 回掉
     * @param title 标题  默认加载中...
     */
    showLoading(callback:(loading:Loading)=>void,title?:string){
        let loading=this.loadingCtrl.create({content:title||"加载中..."});
        setTimeout(()=>{
            callback(loading);
        },100);
        loading.present();
    }
}
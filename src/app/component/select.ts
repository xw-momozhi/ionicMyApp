import { Component, Input,Output,EventEmitter} from '@angular/core';
import { AlertController} from 'ionic-angular';
//<ng-content></ng-content>
@Component({
    selector: '.select',
    styles:[""],
    template: ``,
    host: {
        '(click)': 'onClick($event.target)'
    }
})
export class selectData {
    @Input()
    title:string="";
    @Input("data")
    data:any;
    @Input()
    value:string="value";
    @Input()
    name:string="name";
    @Input("val")
    source:string;
    @Output()
    selChange = new EventEmitter();
    constructor(private alertCtrl:AlertController) {}

    ngAfterViewInit(){
        if(this.data && this.data.length>0){
            for(let i=0;i<this.data.length;i++){
                let value=this.data[i];
                if(this.source==value[this.value]){
                    setTimeout(()=>{
                        this.selChange.emit(value);
                    },100)
                    return ;
                }
            }
        }
    }
    onClick(){
        this.selectPop(this.title,this.data,this.source,(d)=>{
            this.selChange.emit(d);
        })
    }
    private selectPop(title:string,dataList:any,source:string,callBlock:(data:any)=>void){
        let options=[];
        (dataList||[]).forEach((value)=>{
            options.push({
                type: 'radio',
                label: value[this.name],
                value:value,
                checked: source==value[this.value],
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
}
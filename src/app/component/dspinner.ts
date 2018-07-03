import { Component, Input } from '@angular/core';

//<ng-content></ng-content>
@Component({
    selector: '[dspinner]',
    styles:[""],
    template: `
<div> 
    <ng-content *ngIf="showContent"></ng-content>
    <div *ngIf="showSpinner"  style="margin: 20px auto; text-align: center;">
        <ion-spinner icon="android"></ion-spinner>
    </div>
    <p style="margin-top:20px; text-align: center; font-size: 16px;" *ngIf="showNoContent">
        <i class="glyphicon glyphicon-warning-sign"></i>&nbsp;
        未找到匹配数据!
    </p>
</div>`
})
export class loadingData {
    showContent
    showSpinner
    showNoContent
    @Input("dspinner")
    set status(val: any) {  
        let len=undefined;
        if(val){
            len=val.length;
        }     
        this.showContent = len;
        this.showSpinner = len === undefined;
        this.showNoContent = val !== '' && len === 0;
        
    }
    constructor() {}
    
}
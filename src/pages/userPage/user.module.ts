import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { messagePage } from './userMessage/message.page';

@NgModule({
    declarations: [
        messagePage,
    ],
    entryComponents: [
        messagePage,
    ],
    imports: [ 
        IonicPageModule.forChild(messagePage),
     ],
    exports: [ IonicPageModule ]
})
export class userModule {
    constructor(){
        console.log("userModule")
    }
    
}
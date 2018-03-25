import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular'

import { Auth } from '../../../app/services/auth'
import { guardsPage } from '../../../app/component/guards.page'


@Component({
    selector: 'message-page',
    templateUrl: './message.page.html',
    //styleUrls: ['./message.page.scss']
})
export class messagePage extends guardsPage implements OnInit  {
    constructor(auth:Auth) {
        super(auth);
     }

    ngOnInit() { }
    
}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { HomePage } from './home/home';
import { ContactPage } from './contact/contact';
import { AboutPage } from './about/about';

@NgModule({
    declarations: [
        TabsPage,
        HomePage,
        ContactPage,
        AboutPage
    ],
    entryComponents: [
        TabsPage,
        HomePage,
        ContactPage,
        AboutPage
    ],
    imports: [ 
        IonicPageModule.forChild(TabsPage),
     ],
    exports: [ IonicPageModule ]
})
export class navPageModule {}
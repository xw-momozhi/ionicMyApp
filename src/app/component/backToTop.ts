import { Component,ElementRef,Renderer  } from '@angular/core';
import { Content,ScrollEvent,ViewController} from 'ionic-angular';

//<ng-content></ng-content>
@Component({
    selector: 'back-top',
    template: `
<div class="backtotop" tappable (click)="scrollTop()">
    <ion-icon name="arrow-round-up"></ion-icon>
</div>`
})
export class BackToTop {
    _init:boolean=false;
    _content: Content;
    _scLsn;
    _isShow:boolean;
    constructor(private elementRef:ElementRef,private renderer:Renderer,private viewCtrl: ViewController) {
    }
    scrollTop(){
        this._content.scrollToTop(300);
    }
    _onScroll(ev: ScrollEvent){
        // //判断是否滚动有高度
        // if (!infiniteHeight) {return 3;}
        const d = this._content.getContentDimensions();
        if(d.scrollTop>500){ 
            this.setElementClass("on",true);
        }else{
            this.setElementClass("on",false);
        }
    }
    private setElementClass(className:string,isBo:boolean){
        if(this._isShow!=isBo){
            this._isShow=isBo;
            this.renderer.setElementClass(this.elementRef.nativeElement,className,isBo);
        }
    }
    _setListeners(shouldListen: boolean) {
        if (this._init) {
            if (shouldListen) {
                if (!this._scLsn) {
                    //绑定事件
                    this._scLsn = this._content.ionScroll.subscribe(this._onScroll.bind(this));
                }
            } else {
                //销毁事件
                this._scLsn && this._scLsn.unsubscribe();
                this._scLsn = null;
            }
        }
    }
    /**
     * 当把内容投影进组件之后调用。
     */
    ngAfterContentInit() {
        //console.log(this.viewCtrl.getContent)
        this._content=this.viewCtrl.getContent();
        this._init = true;
        this._setListeners(true);
    }

    /**
     * 当 Angular 每次销毁指令 / 组件之前调用。
     */
    ngOnDestroy() {
        this._setListeners(false);
    }
}
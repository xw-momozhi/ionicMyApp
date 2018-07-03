import { Component,Input,ElementRef,Optional} from '@angular/core';
import { NgModel }   from '@angular/forms';
@Component({
    selector: '[allInput]',
    template: `<ng-content></ng-content>`
})
export class allInput {
    constructor() {}
   // @ContentChildren(inputLine)
    private inputLines:Array<inputLine>=[];
    /**添加 */
    add(line:inputLine){
        this.inputLines.push(line);
    }
    /**移除 */
    remove(line){
        for(let index=0;index<this.inputLines.length;index++){
            if(line === this.inputLines[index]){
                this.inputLines.splice(index,1);
                break; 
            }
        }
    }
    /**跳到下一个输入框中 */
    nextFocus(line:inputLine){
        for(let index=0;index<this.inputLines.length;index++){
            if(line === this.inputLines[index]){
                this.goNextInput(index+1);
                break; 
            }
        }
    }
    /**跳到下一个输入框中*/
    private goNextInput=function(i){
        if(i>=this.inputLines.length){return;}
        for(var index=i;index<this.inputLines.length;index++){
            if (this.inputLines[index] ) {
                this.inputLines[index].focus();
                break;
            }    
        }
    }
}

@Component({
    selector: '[inputLine]',
    template: ``
})
export class inputLine {
    //@Optional()可选  _allInput可为null
    @Input()
    min:number=0;
    /*只显示小数点后几位 */
    @Input()
    fixed:number;
    constructor(private _elementRef: ElementRef,@Optional() private _allInput:allInput,@Optional() private control:NgModel) {}
    ngOnInit(){
        let element=this._elementRef.nativeElement;
        if(this._allInput){
            this._allInput.add(this);
            element.addEventListener("keydown",(e)=>{
                if(e.keyCode==13 || e.key=="Enter"){
                    this._allInput.nextFocus(this);
                }
            })
        }
        if(element.getAttribute("type")=="number" && this.min>=0){
            element.addEventListener("focus",(e)=>{
                if(element.value==0){
                    element.value="";
                }
            })
            element.addEventListener("blur",(e)=>{
                if(element.value==""){
                    element.value=0;
                }
            })
            element.setAttribute("min","0");
            element.addEventListener("keypress",(event)=>{
                if((event.key=="." && /\./.test(element.value)) || event.key=='-'){
                    event.preventDefault();
                    return false;
                } 
            })
            if(this.control)
            this.control.valueChanges.subscribe(d=>{
                if (element.value == "") {
                    element.value = 0;
                    this.control.viewToModelUpdate(element.value);
                }else if(/^0[0-9]+(|.)/g.test(element.value)){
                    element.value=element.value.replace(/^0(|[1-9]+)/g,(e)=>{return e.replace(/^0+/g,"")});
                    this.control.viewToModelUpdate(element.value);
                }
                if(this.fixed>=0 && new RegExp("[.][0-9]{"+this.fixed+"}","g").test(element.value)){
                    let fixed=this.fixed*1;
                    element.value= element.value.replace(/[.][0-9]+$/g,(e)=>{return e.substr(0,(fixed||-1)+1)});
                    this.control.viewToModelUpdate(element.value);
                }
            })
        }
    }
  
    /**
     * 当 Angular 每次销毁指令 / 组件之前调用。
     */
    ngOnDestroy() {
        if(this._allInput){
            this._allInput.remove(this);
        }
    }
    /**获取焦点 */
    focus(){
        this._elementRef.nativeElement.focus();
    }
}


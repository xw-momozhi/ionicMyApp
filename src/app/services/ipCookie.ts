export  class IpCookie{
    setCookie(name:string,value:string,expiredays:number = 30)
    {
        //var expiredays = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + expiredays*24*60*60*1000);
        document.cookie = name + "="+ window["escape"](value) + ";expires=" + exp["toGMTString"]();
    }
    getCookie(name:string)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return window["unescape"](arr[2]);
        else
            return null;
    }
    remove(name:string){
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=this.getCookie(name);
        if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp["toGMTString"]();
    }
}

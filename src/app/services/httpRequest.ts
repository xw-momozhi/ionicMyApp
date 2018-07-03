import { Http, Request, RequestMethod,Headers,URLSearchParams} from '@angular/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import  * as common from '../common';
@Injectable()
export class httpService{
    constructor(private http:Http){}
    /**
     * @param method 方法名
     * @param data 参数 json类型
     * @param prefix api地址 可不传
     */
    post(method:string, data:any, prefix?:string){
        return this.httpAES(method, data, RequestMethod.Post,prefix);
    }
    get(method:string, data:any, prefix?:string){
        return this.httpAES(method, data, RequestMethod.Get,prefix);
    }
    put(method:string, data:any, prefix?:string){
        return this.httpAES(method, data, RequestMethod.Put,prefix);
    }
    private httpAES(method:string, data:any, modeType:RequestMethod,prefix?:string){
   
    	var requestOptions:any={
            method: modeType,
            headers:new Headers({
                 'Content-Type': 'application/x-www-form-urlencoded'
            }),
            url: config.baseUrl+(prefix || "appservice.asmx")+"/" + method,
        }
        if(modeType==RequestMethod.Get){
			requestOptions.search=data;
		}else{
            const bodyData = new URLSearchParams();
            for (const key in data) {
                bodyData.append(key,data[key]);
            }
            requestOptions.body= bodyData;
		}

	    return this.http.request(new Request(requestOptions)).toPromise().then(response =>{
			let data:any={
				status:true,
                message:'',
                data:''
			}
			let d=response.text();
			if(d.indexOf("error")==0){
				data.status=false;
				data.message=d.substr("error$".length);
			}else{
				data["data"]=common.getJson(d,d);
			}
           return data;
        })
    }
    
}

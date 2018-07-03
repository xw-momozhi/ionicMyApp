import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

/**
 * 用于缓存数据 
*/
@Injectable()
export class cacheData{
    private static storage:Storage=new Storage({
        name: '__cacheDB',
        driverOrder: ['localstorage','sqlite', 'websql', 'indexeddb']
     });
    /**
     * 初始化 从Storage缓存中将数据全读出
     */
    static init(){
        this.storage.forEach((value,key)=>{
            this._keys[key]=value;
        })
    }

    private static _keys = {};
    /**
     * 添加
    */
	static setItem(key:string, value:any):Promise<any> {
        this._keys[key]=value;
       return this.storage.set(key,value);
	};
    /**
     * 返回
    */
	static getItem(key:string):any {
		return this._keys[key];
	};
    /**
     * 移除
     * @param key 
     */
	static removeItem (key:string) {
        delete this._keys[key];
        this.storage.remove(key);
	};
    /**
     * 清除
    */
    static clean() {
        this._keys = {};
        this.storage.clear();
    };
}
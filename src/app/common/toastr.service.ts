import { InjectionToken } from '@angular/core'

export const TOASTR_TOKEN = new InjectionToken<IToastr>('toastr')

export interface IToastr{
    success(msg:string,title?:string):void;
    info(msg:string,title?:string):void;
    warning(msg:string,title?:string):void;
    error(msg:string,title?:string):void;
}

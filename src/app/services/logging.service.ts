import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  public logStatusChange(msg: string):void{
    console.log('A server status changed, new status: '+msg);
  }

}

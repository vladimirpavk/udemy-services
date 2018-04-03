import { Injectable, EventEmitter} from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class DataService {

  public accounts:{name: string, status:string}[] = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) { }  

  public statusUpdated:EventEmitter<string> = new EventEmitter<string>();

  public onAccountAdded(newAccount: {name: string, status: string}):void {
    this.accounts.push(newAccount);
    this.loggingService.logStatusChange(newAccount.status);
  }

  public onStatusChanged(updateInfo: {id: number, newStatus: string}):void {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.logStatusChange(updateInfo.newStatus);

   // this.statusUpdated.emit(updateInfo.newStatus);
  }
  
}

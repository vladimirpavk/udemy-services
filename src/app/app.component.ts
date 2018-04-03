import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  public accounts: {name: string, status:string}[] = [];

  constructor(private dataService: DataService){
  }

  ngOnInit(){
    this.accounts=this.dataService.accounts;
  }

  /*onAccountAdded(newAccount: {name: string, status: string}) {
    this.dataService.onAccountAdded(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.dataService.onStatusChanged(updateInfo);
  }*/
}

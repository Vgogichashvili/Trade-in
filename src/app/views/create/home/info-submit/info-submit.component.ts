import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { StateManagementService } from 'src/app/services/state-management.service';


@Component({
  selector: 'app-info-submit',
  templateUrl: './info-submit.component.html',
  styleUrls: ['./info-submit.component.css']
})
export class InfoSubmitPgComponent implements OnInit {

  tradeInData:any = {};
  images:any = {};
  user:any = {};
  product:any = {};

  constructor(
    private router:Router,
    private stateM:StateManagementService,
    private db:FirebaseService
  ) { }

  ngOnInit(): void {
    this.getFullTradeInData();
  }

  checkPageDataValidity(){
    // if(   this.product == null || this.product == undefined || this.user == null || this.user == undefined)[
    //   // this.router.navigate(['/'])
    // ]
  }

  getFullTradeInData(){
    this.stateM.getFullTradeInData().subscribe((response:any) => {
      this.tradeInData = response;
      this.user = response.user;
      this.product = response.product;
      this.checkPageDataValidity()
    })
  }

  onCancelBtnClick(){
    this.stateM.deleteFullTradeInData()
    this.router.navigate(['/upload-success'])

  }

  onFullTradeInDataSubmit(){
    this.db.sendTradeInDataToFireBase(this.tradeInData)
    this.stateM.deleteFullTradeInData()
    this.router.navigate(['/upload-success'])
  }

}
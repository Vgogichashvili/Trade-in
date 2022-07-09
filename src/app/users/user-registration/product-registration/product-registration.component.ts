import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateManagementService } from 'src/app/services/state-management.service';


@Component({
  selector: 'product-registration-pg',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductFromPgComponent implements OnInit {

  constructor(private stateM:StateManagementService,private router:Router) { }

  carFormShow:boolean = false;
  techFormShow:boolean = false;
  productType!:any;

  ngOnInit(): void {
    this.checkPageDataValidity()
  }

  checkPageDataValidity(){
    this.stateM.getFullTradeInData().subscribe((response:any) => {
      if(response.product != null){
        this.router.navigate(['info-submit'])
      }else if (response.user == null){
        this.router.navigate(['/'])
      }else{
        return;
      }
    })
  }

  onProductTypeChange(event:any){
    let val = event.value;
    this.productType = val;
    if(val == 'car'){
      this.carFormShow = true;
      this.techFormShow = false;
    }else if(val == 'tech'){
      this.techFormShow = true;
      this.carFormShow = false;
    }
  }

  onCarFormSubmit(carData:any){
    carData.productType = this.productType;
    this.stateM.addTradeInProductData(carData)
    this.router.navigate(['info-submit'])
  }

  onTechFormSubmit(techData:any){
    techData.productType = this.productType;
    this.stateM.addTradeInProductData(techData)
    this.router.navigate(['info-submit'])
  }

  onCancelBtnClick(){
    this.stateM.deleteTradeInUserData();
    this.router.navigate(['/'])
  }

}

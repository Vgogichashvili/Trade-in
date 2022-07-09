import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { StateManagementService } from 'src/app/services/state-management.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  hide = true;
  
  constructor(
    private stateM:StateManagementService,
    private router:Router,
    private firebase:FirebaseService
  ) { }

  ngOnInit(): void {
    this.checkDataValidity()
  }

  checkDataValidity(){
    this.stateM.getFullTradeInData().subscribe((response:any) => {
      if(response.user != null){
        this.router.navigate(['/'])
      }else{
        return;
      }
    })
  }

  onFormSubmit(userData:any){
    console.log(userData)
    this.stateM.addTradeInUserData(userData);
    this.router.navigate(['/product-registration'])
  }
}

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AddFullTradeInData,  addTradeInProductData,  addTradeInUserData, deleteFullTradeInData, deleteTradeInProductData, deleteTradeInUserData } from '../actions/tradein.actions';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  constructor(
    private store:Store<any>
  ) { 
    this.store.dispatch(new AddFullTradeInData())
  }

  getFullTradeInData(){
    return this.store.pipe(select('tradein' as any))
  }

  addTradeInUserData(userData:any){
    this.store.dispatch(new addTradeInUserData(userData))
  }

  addTradeInProductData(productData:any){
    this.store.dispatch(new addTradeInProductData(productData))
  }

  deleteFullTradeInData(){
    this.store.dispatch(new deleteFullTradeInData({}))
  }

  deleteTradeInUserData(){
    this.store.dispatch(new deleteTradeInUserData(null))
  }

  deleteTradeInProductData(){
    this.store.dispatch(new deleteTradeInProductData(null))
  }

 
}

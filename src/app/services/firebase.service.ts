import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private db:AngularFireDatabase
  ) { }

  sendTradeInDataToFireBase(data:any){
    let productsRef = this.db.list('list/' + `${data.product.productType}`);
    productsRef.push(data)
  }
}

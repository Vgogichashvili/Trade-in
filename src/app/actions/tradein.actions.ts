import { Action } from "@ngrx/store";
import { TradeInDataActionTypes } from "./action-types.model";

export class BaseActions implements Action {
    type!: string;
    payload!: any;
}
export class AddFullTradeInData extends BaseActions{
    constructor() {
        super();
        super.type = TradeInDataActionTypes.addFullTradeInData;
        if(localStorage['tradeInData'] != undefined){
            super.payload = JSON.parse(localStorage['tradeInData'])
        }else{
            super.payload = null
        }
    }
}

export class addTradeInUserData extends BaseActions{
    constructor(payload:any) {
        super();
        super.type = TradeInDataActionTypes.addTradeInUserData;
        super.payload = payload;
    }
}

export class addTradeInProductData extends BaseActions{
    constructor(payload:any) {
        super();
        super.type = TradeInDataActionTypes.addTradeInProductData;
        super.payload = payload;
    }
}



export class deleteFullTradeInData extends BaseActions{
    constructor(payload:any) {
        super();
        super.type = TradeInDataActionTypes.deleteFullTradeInData;
        super.payload = payload;   
    }
}

export class deleteTradeInUserData extends BaseActions{
    constructor(payload:any) {
        super();
        super.type = TradeInDataActionTypes.deleteTradeInUserData;
        super.payload = payload;   
    }
}

export class deleteTradeInProductData extends BaseActions{
    constructor(payload:any) {
        super();
        super.type = TradeInDataActionTypes.deleteTradeInProductData;
        super.payload = payload;   
    }
}





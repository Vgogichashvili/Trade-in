import { TradeInDataActionTypes } from "../actions/action-types.model";
import { BaseActions } from "../actions/tradein.actions";

export class TradeInReducer{
    static state:any = {};

    public static Reduce(state = TradeInReducer.state, action: BaseActions){
        let tmp:any = {};
        tmp.user = state.user;
        tmp.product = state.product;
       

        switch(action.type) {
            case TradeInDataActionTypes.addFullTradeInData:
                if(action.payload != null){
                    TradeInReducer.state = action.payload;
                }
                return TradeInReducer.state;
            case TradeInDataActionTypes.addTradeInUserData:
                tmp.user = action.payload;
                TradeInReducer.state = tmp;
                TradeInReducer.save();
                return TradeInReducer.state;
            case TradeInDataActionTypes.addTradeInProductData:
                tmp.product = action.payload;
                TradeInReducer.state = tmp;
                TradeInReducer.save();
                return TradeInReducer.state;    
            case TradeInDataActionTypes.deleteFullTradeInData:
                TradeInReducer.state = action.payload;
                TradeInReducer.save();
                return TradeInReducer.state;
            case TradeInDataActionTypes.deleteTradeInUserData:
                tmp.user = action.payload
                TradeInReducer.state = tmp;
                TradeInReducer.save()
                return TradeInReducer.state;
            case TradeInDataActionTypes.deleteTradeInProductData:
                tmp.product = action.payload
                TradeInReducer.state = tmp;
                TradeInReducer.save()
                return TradeInReducer.state;    
            default:
                return state
        }
    }


    private static save(){
        localStorage['tradeInData'] = JSON.stringify(TradeInReducer.state);
    }
}
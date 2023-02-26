import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import {FilterReducer} from "./FilterSection/Filter.reducer";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import {ProductReducer} from "./MainProduct/MainProduct.reducer"
import { getdatareducer } from "./Products/getdata.reducer";
import { deletedatareducer } from "./Products/deletedatareducer";
import { updatedatareducer } from "./Products/updatedata.reducer";
import {adddatareducer} from './Products/adddatareducers'
import { banuserreducer } from "./Users/banusersreducer";
import {getbanuserreducer} from './Users/getbanuserreducer'
import {removebanreducer} from './Users/removebanuserreducer'
import {getuserreducer} from './Users/getusersreducer'
const rootReducer = combineReducers({AppReducer, AuthReducer,ProductManager:ProductReducer,FilterManger:FilterReducer,getdatareducer,deletedatareducer,updatedatareducer,adddatareducer,banuserreducer,getbanuserreducer,removebanreducer,getuserreducer});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export {store};
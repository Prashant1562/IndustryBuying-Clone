import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { getdatareducer } from "./Products/getdata.reducer";
import { deletedatareducer } from "./Products/deletedatareducer";
import { updatedatareducer } from "./Products/updatedata.reducer";
import { getuserreducer } from "./Users/getusersreducer";
const rootReducer = combineReducers({AppReducer,getdatareducer,deletedatareducer,updatedatareducer,getuserreducer});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export {store};
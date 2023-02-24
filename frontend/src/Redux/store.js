import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { FilterReducer } from "./FilterSection/Filter.reducer";
import { ProductReducer } from "./MainProduct/MainProduct.reducer";

const rootReducer = combineReducers({AppReducer,ProductManager:ProductReducer,FilterManger:FilterReducer});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export {store};
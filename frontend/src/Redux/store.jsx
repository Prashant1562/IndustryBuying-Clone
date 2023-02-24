import {applyMiddleware, legacy_createStore,combineReducers} from "redux";
import thunk from 'redux-thunk';
import { getdatareducer } from "./Products/getdata.reducer";
import { deletedatareducer } from "./Products/deletedatareducer";
import { updatedatareducer } from "./Products/updatedata.reducer";

const root = combineReducers({getdatareducer,deletedatareducer,updatedatareducer})
export const store=legacy_createStore(root,applyMiddleware(thunk));


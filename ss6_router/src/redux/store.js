import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import {rootReducer} from './reducers';
// tạo redux store và cung cấp rootReducer
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
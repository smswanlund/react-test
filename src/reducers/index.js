import addProducts from "./product";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    productReducer: addProducts
});

export default rootReducer;
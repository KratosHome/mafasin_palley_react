import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  productsInCard: cartReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import userReducer from "./userReducers";
import userSlice from "../slices/userSlice";

const rootReducer = combineReducers({
    user: userSlice,
});

export default rootReducer;
import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { recoverReducer } from "./RecoverReducer";
import { signupReducer } from "./SignupReducer";

export const reducers = combineReducers({
    login   : loginReducer,
    recover : recoverReducer,
    signup  : signupReducer
});

export type RootState = ReturnType<typeof reducers>

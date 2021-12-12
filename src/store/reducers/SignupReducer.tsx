import { AnyAction } from "redux";
import { SIGNUP_USER, SIGNUP_USER_FAILED } from "../actions/Types";

export const signupReducer = (data = {}, action:AnyAction) =>{    
    if(action.type === SIGNUP_USER){
        return action.payload;
    } else if(action.type === SIGNUP_USER_FAILED){
        return action.payload;
    }

    return data;
};
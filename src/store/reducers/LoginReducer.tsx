import { AnyAction } from "redux";
import { LOGIN_USER, LOGIN_USER_FAILED } from "../actions/Types";

export const loginReducer = (data = {}, action : AnyAction) =>{        
    if(action.type === LOGIN_USER){
        return action.payload;
    } else if(action.type === LOGIN_USER_FAILED){
        return action.payload;
    }

    return data;
}

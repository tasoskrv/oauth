import { AnyAction } from "redux";
import { RECOVER_USER, RECOVER_USER_FAILED } from "../actions/Types";

export const recoverReducer = (data = {}, action:AnyAction) =>{    
    if(action.type === RECOVER_USER){
        return action.payload;
    } else if(action.type === RECOVER_USER_FAILED){
        return action.payload;
    }

    return data;
};
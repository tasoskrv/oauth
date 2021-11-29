import { AnyAction, combineReducers } from "redux";

const loginReducer = (data = {}, action : AnyAction) =>{    
    debugger;
    if(action.type === "LOGIN_USER"){
        return action.payload.data;
    } else if(action.type === "LOGIN_USER_FAILED"){
        return action.payload;
    }

    return data;
}

const recoverReducer = (data = {}, action:AnyAction) =>{    
    if(action.type === "RECOVER_USER"){
        return action.payload.data;
    }

    return data;
};


export const reducers = combineReducers({
    login   : loginReducer,
    recover : recoverReducer
});

export type RootState = ReturnType<typeof reducers>

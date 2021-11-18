import { AnyAction, combineReducers } from "redux";

const loginReducer = (data = {}, action : AnyAction) =>{    
    
    if(action.type == "LOGIN_USER"){
        return action.payload.data;
    }

    return data;
}

export const reducers = combineReducers({
    login : loginReducer
});

export type RootState = ReturnType<typeof reducers>

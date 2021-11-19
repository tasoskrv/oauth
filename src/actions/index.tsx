import {Action, Dispatch} from 'redux';
import LoginEntity from "../domain/login/LoginEntity";
import LoginUsecase from "../domain/login/LoginUsecase";

export const loginRequest = (usecase : LoginUsecase, loginEntity : LoginEntity) => {
    
    return async (dispatch : Dispatch<Action>, getState:any)=>{    
        const response = await usecase.loginUser(loginEntity);

        dispatch({
            type    : 'LOGIN_USER',
            payload : response
        });
    }
}


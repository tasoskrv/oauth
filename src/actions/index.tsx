import {Action, Dispatch} from 'redux';
import LoginEntity from "../domain/LoginEntity";
import LoginUsecase from "../domain/LoginUsecase";

export const loginRequest = (usecase : LoginUsecase, email : any, password : string) => {
    
    return async (dispatch : Dispatch<Action>, getState:any)=>{

        const lll = new LoginEntity(email, password);
        const response = await usecase.loginUser(lll);

        dispatch({
            type    : 'LOGIN_USER',
            payload : response
        });
    }
}


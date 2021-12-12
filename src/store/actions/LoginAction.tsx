import {Action, Dispatch} from 'redux';
import LoginEntity from "../../domain/login/LoginEntity";
import LoginUsecase from "../../domain/login/LoginUsecase";
import {LOGIN_USER, LOGIN_USER_FAILED} from './Types';

export const loginRequest = (usecase : LoginUsecase, entity : LoginEntity) => {    
    return async (dispatch : Dispatch<Action>, getState:any)=>{            
        const response : any = await usecase.loginUser(entity);
        
        if(!response["success"]){
            dispatch({
                type    : LOGIN_USER_FAILED,
                payload : response
            });            
        } else {
            dispatch({
                type    : LOGIN_USER,
                payload : response
            });
        }

        return response;
    }
}


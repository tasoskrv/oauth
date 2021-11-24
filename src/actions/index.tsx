import {Action, Dispatch} from 'redux';
import ForgotPasswordEntity from '../domain/forgotpassword/ForgotPasswordEntity';
import ForgotPasswordUsecase from '../domain/forgotpassword/ForgotPasswordUsecase';
import LoginEntity from "../domain/login/LoginEntity";
import LoginUsecase from "../domain/login/LoginUsecase";
import SignUpEntity from '../domain/signup/SignUpEntity';
import SignUpUsecase from '../domain/signup/SignUpUsecase';

export const loginRequest = (usecase : LoginUsecase, entity : LoginEntity) => {    
    return async (dispatch : Dispatch<Action>, getState:any)=>{    
        const response = await usecase.loginUser(entity);

        dispatch({
            type    : 'LOGIN_USER',
            payload : response
        });
    }
}

export const recoverRequest = (usecase : ForgotPasswordUsecase, entity : ForgotPasswordEntity) => {    
    return async (dispatch : Dispatch<Action>, getState:any)=>{    
        const response = await usecase.recoverUser(entity);

        dispatch({
            type    : 'RECOVER_USER',
            payload : response
        });
    }
}

export const signupRequest = (usecase:SignUpUsecase, entity:SignUpEntity)=>{
    return async (dispatch:Dispatch<Action>, getState:any) => {
        const response = await usecase.signupUser(entity);

        dispatch({
            type    : 'SIGNUP_USER',
            payload : response
        });
    }
};


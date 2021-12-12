import {Action, Dispatch} from 'redux';
import SignUpEntity from '../../domain/signup/SignUpEntity';
import SignUpUsecase from '../../domain/signup/SignUpUsecase';
import {SIGNUP_USER, SIGNUP_USER_FAILED} from './Types';

export const signupRequest = (usecase:SignUpUsecase, entity:SignUpEntity)=>{
    return async (dispatch:Dispatch<Action>, getState:any) => {
        const response = await usecase.signupUser(entity);
        
        if(!response["success"]){
            dispatch({
                type    : SIGNUP_USER_FAILED,
                payload : response
            });            
        } else {
            dispatch({
                type    : SIGNUP_USER,
                payload : response
            });
        }

        return response;
    }
};

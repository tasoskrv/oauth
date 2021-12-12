import {Action, Dispatch} from 'redux';
import ForgotPasswordEntity from '../../domain/forgotpassword/ForgotPasswordEntity';
import ForgotPasswordUsecase from '../../domain/forgotpassword/ForgotPasswordUsecase';
import {RECOVER_USER, RECOVER_USER_FAILED} from './Types';

export const recoverRequest = (usecase : ForgotPasswordUsecase, entity : ForgotPasswordEntity) => {    
    return async (dispatch : Dispatch<Action>, getState:any)=>{    
        const response = await usecase.recoverUser(entity);

        if(!response["success"]){
            dispatch({
                type    : RECOVER_USER_FAILED,
                payload : response
            });            
        } else {
            dispatch({
                type    : RECOVER_USER,
                payload : response
            });
        }

        return response;
    }
}
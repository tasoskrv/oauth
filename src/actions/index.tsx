import RequestApis from "../infrastructure/apis/RequestApis";
import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import axios from "axios";

export const loginRequest = (email : any, password : string) => {
    debugger;
    return async (dispatch : Dispatch<Action>, getState:any)=>{
        const response = await RequestApis.post('',{email,password});        
        debugger;
        dispatch({
            type    : 'LOGIN_USER',
            payload : response
        });
    }
}

/*
export const getComments = (postId: string) => {
    debugger;
    return async (dispatch: Dispatch<Action>) => {
debugger;
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

            dispatch({
                type: "GET_POST_COMMENTS_SUCCESS",
                payload: data  
            });

        } catch(err) {
            dispatch({
                type: "GET_POST_COMMENTS_FAIL",
                payload: err
            });
        }
    }
} 
*/
import ForgotPasswordEntity from "./ForgotPasswordEntity";

export default interface ForgotPasswordRepository{
    recover(forgotPasswordEntity:ForgotPasswordEntity):Promise<any>; 
}
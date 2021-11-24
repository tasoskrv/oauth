import ForgotPasswordEntity from "../domain/forgotpassword/ForgotPasswordEntity";
import ForgotPasswordRepository from "../domain/forgotpassword/ForgotPasswordRepository";
import RequestApis from "./apis/RequestApis";

export default class ForgotPasswordRepositoryImpl implements ForgotPasswordRepository{
    async recover(forgotPasswordEntity: ForgotPasswordEntity): Promise<any> {
        
        const response = await RequestApis.post('',{
            email : forgotPasswordEntity.email            
        });
        console.log(response);
        return response;

    }
}
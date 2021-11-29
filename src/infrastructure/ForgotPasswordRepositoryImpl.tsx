import ForgotPasswordEntity from "../domain/forgotpassword/ForgotPasswordEntity";
import ForgotPasswordRepository from "../domain/forgotpassword/ForgotPasswordRepository";
import RequestApis from "./apis/RequestApis";

export default class ForgotPasswordRepositoryImpl implements ForgotPasswordRepository{
    async recover(forgotPasswordEntity: ForgotPasswordEntity): Promise<any> {
        
        const response : any = await RequestApis.post('',{
            email : forgotPasswordEntity.email            
        })
        .then(r=>{
            return response;
        })
        .catch(e=>{
            debugger;
            return response;
        });
    }
}
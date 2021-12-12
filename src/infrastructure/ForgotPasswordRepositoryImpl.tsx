import ForgotPasswordEntity from "../domain/forgotpassword/ForgotPasswordEntity";
import ForgotPasswordRepository from "../domain/forgotpassword/ForgotPasswordRepository";
import RequestApis from "./apis/RequestApis";

export default class ForgotPasswordRepositoryImpl implements ForgotPasswordRepository{
    async recover(forgotPasswordEntity: ForgotPasswordEntity): Promise<any> {
        let response :any;

        try {
            const responseApi : any = await RequestApis.post('',{
                email : forgotPasswordEntity.email            
            },{
                headers : {
                    'oauth' : 'reset'
                }
            });
    
            let data = responseApi.data;
    
            if(!data.success){
                response = {"success":false, message:data.error};
            } else {
                response = data;
            }
        } catch(ex:any){
            response = {"success":false, message:ex.message};
        }

        return response;
    }
}
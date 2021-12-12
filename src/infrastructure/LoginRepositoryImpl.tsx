import LoginEntity from "../domain/login/LoginEntity";
import LoginRepository from "../domain/login/LoginRepository";
import RequestApis from "./apis/RequestApis";

export default class LoginRepositoryImpl implements LoginRepository{
    async login(loginEntity: LoginEntity): Promise<any> {
        let response :any;
        
        try {
            const responseApi = await RequestApis.post('',{
                email    : loginEntity.email,
                password : loginEntity.password
            }, {
                headers : {
                    'oauth' : 'authenticate'
                }
            });

            let data = responseApi.data;

            if(!data.success){
                response = {"success":false, message:data.error};
            } else {
                response = {"success":true, token:data.token, sn : data.sn};
            }
        } catch(ex : any){
            response = {"success":false, message:ex.message};
        }

        return response;
    }
}
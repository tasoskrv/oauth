import LoginEntity from "../domain/login/LoginEntity";
import LoginRepository from "../domain/login/LoginRepository";
import RequestApis from "./apis/RequestApis";

export default class LoginRepositoryImpl implements LoginRepository{
    async login(loginEntity: LoginEntity): Promise<any> {       
        debugger;
        let response :any;
        
        try{
            const responseApi = await RequestApis.post('',{
                email    : loginEntity.email,
                password : loginEntity.password
            });

            let data = responseApi.data;

            if(!data.success){
                response = {"success":false, message:data.error};
            }
        }catch(ex : any){
            response = {"success":false, message:ex.message};
        }

        return response;
    }
}
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

            response = responseApi.data;

        }catch(ex : any){
            response = {"success":false, message:ex.message};
        }

        return response;
    }
}
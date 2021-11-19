import LoginEntity from "../domain/login/LoginEntity";
import LoginRepository from "../domain/login/LoginRepository";
import RequestApis from "./apis/RequestApis";

export default class LoginRepositoryImpl implements LoginRepository{
    async login(loginEntity: LoginEntity): Promise<any> {        
        const response = await RequestApis.post('',{
            email    : loginEntity.email,
            password : loginEntity.password
        });
        console.log(response);
        return response;
    }
}
import LoginEntity from "../../domain/LoginEntity";
import LoginRepository from "../../domain/LoginRepository";
import RequestApis from "./RequestApis";

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
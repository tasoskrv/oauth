import SignUpEntity from "../domain/signup/SignUpEntity";
import SignupRepository from "../domain/signup/SignUpRepository";
import RequestApis from "./apis/RequestApis";

export default class SignupRepositoryImpl implements SignupRepository{
    async signup(loginEntity: SignUpEntity): Promise<any> {        
        const response = await RequestApis.post('',{
            email    : loginEntity.email,
            password : loginEntity.password
        });
        console.log(response);
        return response;
    }
}
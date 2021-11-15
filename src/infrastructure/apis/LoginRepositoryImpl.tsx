import LoginEntity from "../../domain/LoginEntity";
import LoginRepository from "../../domain/LoginRepository";

export default class LoginRepositoryImpl implements LoginRepository{
    login(loginEntity: LoginEntity): Promise<any> {
        const a:any = ""; 
        console.log(loginEntity.email, loginEntity.password);
        return a;
    }

}
import LoginEntity from "./LoginEntity";
import LoginRepository from "./LoginRepository";

export class LoginUsecase {
    private loginRepo : LoginRepository;

    constructor(loginRepo:LoginRepository){
        this.loginRepo = loginRepo;
    }

    public loginUser(loginEntity: LoginEntity): Promise<any> {
        const loginResult = this.loginRepo.login(loginEntity);

        return loginResult;
    }   
}
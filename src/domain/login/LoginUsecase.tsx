import LoginEntity from "./LoginEntity";
import LoginRepository from "./LoginRepository";

export default class LoginUsecase {
    private loginRepo : LoginRepository;

    constructor(loginRepo:LoginRepository){
        this.loginRepo = loginRepo;
    }

    public async loginUser(loginEntity: LoginEntity): Promise<any> {
        const loginResult = await this.loginRepo.login(loginEntity);

        return loginResult;
    }   
}
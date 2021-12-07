import SignUpEntity from "./SignUpEntity";
import SignupRepository from "./SignUpRepository";


export default class SignUpUsecase{
    private signupRepository : SignupRepository;

    constructor(signupRepository : SignupRepository){
        this.signupRepository = signupRepository;
    }

    public async signupUser(signupEntity:SignUpEntity):Promise<any>{
        const signupResult = await this.signupRepository.signup(signupEntity);

        return signupResult;        
    }
}




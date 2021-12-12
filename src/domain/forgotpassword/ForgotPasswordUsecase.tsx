import ForgotPasswordEntity from "./ForgotPasswordEntity";
import ForgotPasswordRepository from "./ForgotPasswordRepository";

export default class ForgotPasswordUsecase {
    private forgotPassRepo : ForgotPasswordRepository;

    constructor(forgotPassRepo:ForgotPasswordRepository){
        this.forgotPassRepo = forgotPassRepo;
    }

    public recoverUser(forgotPasswordEntity: ForgotPasswordEntity): Promise<any> {
        const recoverResult = this.forgotPassRepo.recover(forgotPasswordEntity);
                
        return recoverResult;
    }   
}
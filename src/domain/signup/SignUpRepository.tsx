import SignUpEntity from "./SignUpEntity";

export default interface SignupRepository{
    signup(signupEntity:SignUpEntity):Promise<any>;
}
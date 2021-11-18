class SignUpEntity {

    public email:string;
    public password:string;
    public firstName:string;

    constructor(email:string, password:string, firstName:string){
        this.email = email;
        this.password = password;
        this.firstName = firstName;
    }
}

export default SignUpEntity;
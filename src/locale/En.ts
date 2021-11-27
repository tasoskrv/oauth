import Lang from "./Lang";

class En extends Lang{
    translations :any =  {
        common : {
            "0001" : "Fill all fields",
            "0002" : "Terms and conditions",
            "0003" : "Passwords don't match",
            "0004" : "Forgot password?",
            "0005" : "Language"
        },
        login : {
            "0001" : "Email",
            "0002" : "Password",            
            "0003" : "Login",
            "0004" : "Sign up"            
        },
        signup : {
            "0001" : "Email",
            "0002" : "Password",
            "0003" : "Re enter password",
            "0004" : "Login",
            "0005" : "Sign up"        
        },
        forgot:{
            "0001" : "Email",
            "0002" : "Login",
            "0003" : "Send"
        }
    }
}

export default En;
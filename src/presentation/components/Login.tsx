import { useEffect, useState } from "react";
import { loginRequest } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useInjection } from "../../di-container";
import LoginEntity from "../../domain/login/LoginEntity";
import LoginUsecase from "../../domain/login/LoginUsecase";
import { Link } from "react-router-dom";

type LoginProps = {
    loginUsecase:LoginUsecase
}

const Login = (loginProps:LoginProps)=>{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    const loginEntity = useInjection(LoginEntity);

    const onLogin = (email : string, password:string)=>{        
        loginEntity.email = email;
        loginEntity.password = password;
        dispatch(loginRequest(loginProps.loginUsecase, loginEntity));
    };

    if(userLogin.token){
        console.log(userLogin.token);
    }

    return (
        <div className="login-wrapper">
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>username</td>
                            <td><input type="text" onBlur = {(e)=>{setEmail(e.currentTarget.value)}}/></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="password" onBlur = {(e)=>{setPassword(e.currentTarget.value)}}/></td>
                        </tr>
                    </tbody>
                </table> 
                <input type="button" value="Login" onClick={()=>onLogin(email, password)}/>
            </form>
            <Link to="/signup">SignUp</Link>
        </div>
    );
}

export default Login;
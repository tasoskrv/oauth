import { useState } from "react";
import { loginRequest } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useInjection } from "../../di-container";
import LoginEntity from "../../domain/login/LoginEntity";
import LoginUsecase from "../../domain/login/LoginUsecase";

const Login = ({loginUsecase}:{loginUsecase:LoginUsecase})=>{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    const loginEntity = useInjection(LoginEntity);

    const onLogin = (email : string, password:string)=>{        
        loginEntity.email = email;
        loginEntity.password = password;
        dispatch(loginRequest(loginUsecase, loginEntity));
    };

    if(userLogin.token){
        console.log(userLogin.token);
    }

    return (
        <div style={{margin:'auto', width:500}}>
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
        </div>
    );
}

export default Login;
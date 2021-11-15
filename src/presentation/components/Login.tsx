import { useState } from "react";
import { loginRequest } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";

const Login = ({usecase}:{usecase:any})=>{
    debugger;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    const onLogin = (email : string, password:string)=>{
        debugger;
        dispatch(loginRequest(usecase, email, password));
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
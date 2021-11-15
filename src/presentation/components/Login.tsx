import React, { useState } from "react";
import { connect } from "react-redux";
import { loginRequest } from "../../actions";
//import { getComments } from "../../actions";
import LoginEntity from "../../domain/LoginEntity";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";

// import { ThunkDispatch } from "redux-thunk";
// import { AnyAction } from "redux";

// type State = { a: string }; // your state type
// type AppDispatch = ThunkDispatch<State, any, AnyAction>; 

//const Login = ({usecase, loginData, loginRequest}:{usecase:any, loginData:any, loginRequest:any})=>{
const Login = ({usecase}:{usecase:any})=>{
    debugger;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    const onLogin = (email : string, password:string)=>{
        /*
        const lll = new LoginEntity(email, password);        
        usecase.loginUser(lll)
        */
        dispatch(loginRequest(email, password));
        //dispatch(getComments("1"));
        //loginRequest(email, password);
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

const mapStateToProps = (state : any)=>{
    return {
        loginData : state.login
    }
}

//export default connect(mapStateToProps,  {loginRequest})(Login);
export default Login;
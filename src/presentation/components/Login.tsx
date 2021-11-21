import { useEffect, useState } from "react";
import { loginRequest } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useInjection } from "../../di-container";
import LoginEntity from "../../domain/login/LoginEntity";
import LoginUsecase from "../../domain/login/LoginUsecase";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

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
        debugger;
        loginEntity.email = email;
        loginEntity.password = password;
        dispatch(loginRequest(loginProps.loginUsecase, loginEntity));
    };

    if(userLogin.token){
        console.log(userLogin.token);
    }

    return (
        <div className="login-wrapper">
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onBlur = {(e)=>{setEmail(e.currentTarget.value)}} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onBlur = {(e)=>{setPassword(e.currentTarget.value)}} />
                </Form.Group>
                <div className="wrapper-forgot-password">
                    <Form.Label className="col-form-label-sm forgot-password">Forgot password?</Form.Label>
                </div>                
                <div className="d-grid gap-2 mt-3">
                    <Button variant="primary" onClick={()=>onLogin(email, password)}>Login</Button>
                </div>
            </Form>
            <div className="d-grid gap-2 mt-3">
                <Link to="/signup"> <Button variant="flat" className="w-100">Sign Up</Button></Link>
            </div>            
        </div>        
    );
}

export default Login;
import { useRef, useState } from "react";
import { loginRequest } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useInjection } from "../../di-container";
import LoginEntity from "../../domain/login/LoginEntity";
import LoginUsecase from "../../domain/login/LoginUsecase";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { Alert, Button, FormControl } from "react-bootstrap";
import FormErrors, {ErrorProps} from "../../core/FormErrors";

type LoginProps = {
    loginUsecase:LoginUsecase
}

const Login = (loginProps:LoginProps)=>{
    const [hasErrors, setHasErrors] = useState<string[]>(["email", "password"]);
    const [valid, setValid] = useState(true);
    const emailEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const passwordEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const loginEntity = useInjection(LoginEntity);

    const userLogin = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    if(userLogin.token){
        console.log(userLogin.token);
        window.location.href = "http://localhost:3001/";
    }   
    
    const onLogin = () : void =>{
        if(hasErrors.length>0){
            setValid(false);
            return;
        }
        
        loginEntity.email = emailEl.current?.value || "";
        loginEntity.password = passwordEl.current?.value || "";
        dispatch(loginRequest(loginProps.loginUsecase, loginEntity));
    };

    const setErrors = (e:any, type : string): void => {
        const errorProps : ErrorProps = {e,hasErrors,setHasErrors,type};

        FormErrors(errorProps);
    };

    return (
        <div className="form-wrapper">
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>                    
                    <Form.Control type="email" ref={emailEl} onBlur= {(e)=> setErrors(e, "email")}/>                
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordEl} onBlur= {(e)=> setErrors(e, "password")}/>
                </Form.Group>
                <Form.Label className="col-form-label-sm">
                    <Link to="/forgot-password">Forgot password?</Link>
                </Form.Label>
                <div className="d-grid gap-2 mt-3">                    
                    <Button variant="primary" onClick={()=>onLogin()}>Login</Button>
                </div>
            </Form>
            <div className="d-grid gap-2 mt-3">
                <Link to="/signup">
                    <Button variant="flat" className="w-100">Sign Up</Button>
                </Link>
            </div>
            {
                valid ?
                <></> :
                <Alert variant="danger" className="error-message">
                    Συμπληρώστε όλα τα πεδία
                </Alert>
            }
        </div>
    );
}

export default Login;
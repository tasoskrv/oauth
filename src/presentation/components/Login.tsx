import { useEffect, useRef, useState } from "react";
import { loginRequest } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useInjection } from "../../di-container";
import LoginEntity from "../../domain/login/LoginEntity";
import LoginUsecase from "../../domain/login/LoginUsecase";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { Alert, Button, FormControl } from "react-bootstrap";
import useFormErrors, { ErrorProps } from "../../core/UseFormErrors";
import Lang from "../../locale/Lang";

type LoginProps = {
    loginUsecase:LoginUsecase
}

const Login = (loginProps:LoginProps)=>{    
    const locale = useInjection(Lang);
    const [valid, setValid] = useState(true);
    const [message, setMessage] = useState("");
    const emailEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const passwordEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const loginEntity = useInjection(LoginEntity);

    const userLogin = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    const {isValid, applyErrors, applyValidators} = useFormErrors();

    useEffect(()=>{
        applyValidators(["email", "password"]);
    },[]);    

    if(userLogin.token){
        console.log(userLogin.token);
        window.location.href = "http://localhost:3001/";
    }   
    
    const ehOnLogin = (e:any) : void =>{
        if(isValid()){
            setValid(true);
            loginEntity.email = emailEl.current?.value || "";
            loginEntity.password = passwordEl.current?.value || "";
            dispatch(loginRequest(loginProps.loginUsecase, loginEntity));
        } else {
            setValid(false);
            setMessage(locale.loc("common.0001"));
        }
    };

    const setErrors = (e:any, type : string, message : string): void => {
        const errorProps : ErrorProps = {e, type, message};

        applyErrors(errorProps);
    };

    return (
        <div className="form-wrapper">
            <Form>
                <Form.Group>
                    <Form.Label>{locale.loc("login.0001")}</Form.Label>                    
                    <Form.Control type="email" ref={emailEl} onBlur= {(e)=> setErrors(e, "email", "Fill email address")}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>{locale.loc("login.0002")}</Form.Label>
                    <Form.Control type="password" ref={passwordEl} onBlur= {(e)=> setErrors(e, "password", "Fill password")}/>
                </Form.Group>
                <Form.Label className="col-form-label-sm">
                    <Link to="/forgot-password">{locale.loc("common.0004")}</Link>
                </Form.Label>
                <div className="d-grid gap-2 mt-3">                    
                    <Button variant="primary" onClick={(e)=>ehOnLogin(e)}>{locale.loc("login.0003")}</Button>
                </div>
            </Form>
            <div className="d-grid gap-2 mt-3">
                <Link to="/signup">
                    <Button variant="flat" className="w-100">{locale.loc("login.0004")}</Button>
                </Link>
            </div>
            {
                valid ?
                <></> :
                <Alert variant="danger" className="error-message">
                    {message}
                </Alert>
            }
        </div>
    );
}

export default Login;
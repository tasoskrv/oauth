import { useRef, useState } from "react";
import SignUpUsecase from "../../domain/signup/SignUpUsecase";
import { Link } from "react-router-dom";
import { Alert, Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useInjection } from "../../di-container";
import SignUpEntity from "../../domain/signup/SignUpEntity";
import { RootState } from "../../reducers";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "../../actions";
import UseFormErrors, { ErrorProps } from "../../core/UseFormErrors";

type SignUpProps = {
    signupUsecase : SignUpUsecase
}

const SignUp = (signUpProps:SignUpProps)=>{

    const [hasErrors, setHasErrors] = useState<string[]>(["email", "password", "repassword"]);
    const [valid, setValid] = useState(true);
    const emailEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const passwordEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const repasswordEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const signUpEntity = useInjection(SignUpEntity);

    const userSignup = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    if(userSignup.token){
        console.log(userSignup.token);
    }   
    
    const ehOnSignup = (e:any) : void =>{
        debugger;
        const errorProps : ErrorProps = {e,hasErrors,setHasErrors, type : "sds", message:"" };
        const {isValid} = UseFormErrors(errorProps);
        
        if(isValid()){
            setValid(true);
            signUpEntity.email = emailEl.current?.value || "";
            signUpEntity.password = passwordEl.current?.value || "";        
            dispatch(signupRequest(signUpProps.signupUsecase, signUpEntity));
        } else {
            setValid(false);
        }
    };

    const setErrors = (e:any, type : string): void => {
        const errorProps : ErrorProps = {e,hasErrors,setHasErrors,type, message:""};

        const {applyErrors} = UseFormErrors(errorProps);
        applyErrors();
    };

    return (
        <div className="form-wrapper">
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailEl} onBlur= {(e)=> setErrors(e, "email")} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordEl} onBlur= {(e)=> setErrors(e, "password")} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Re enter password</Form.Label>
                    <Form.Control type="password" ref={repasswordEl} onBlur= {(e)=> setErrors(e, "repassword")} />
                </Form.Group>                
                <Container className="p-0">
                    <Row>
                        <Col>
                            <Form.Label className="col-form-label-sm">
                                <Link to="/">Login</Link>
                            </Form.Label>
                        </Col>
                        <Col className="col-text-right">
                            <Form.Label className="col-form-label-sm">
                                <Link to="/forgot-password">Forgot password?</Link>
                            </Form.Label>
                        </Col>
                    </Row>
                </Container>
                <div className="d-grid gap-2 mt-3">
                    <Button variant="flat" onClick={(e)=>ehOnSignup(e)}>Sign Up</Button>
                </div>
            </Form>
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

export default SignUp;
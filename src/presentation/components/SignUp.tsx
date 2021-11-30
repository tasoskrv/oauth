import { useEffect, useRef, useState } from "react";
import SignUpUsecase from "../../domain/signup/SignUpUsecase";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, FormControl, Row, Spinner } from "react-bootstrap";
import AlertBox from "../../core/AlertBox";
import { useInjection } from "../../di-container";
import SignUpEntity from "../../domain/signup/SignUpEntity";
import { RootState } from "../../reducers";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "../../actions";
import useFormErrors, { ErrorProps } from "../../core/UseFormErrors";
import Lang from "../../locale/Lang";
import Loading from "../../core/Loading";

type SignUpProps = {
    signupUsecase : SignUpUsecase
}

const SignUp = (signUpProps:SignUpProps)=>{    
    const locale = useInjection(Lang);    
    const [valid, setValid] = useState(true);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const emailEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const passwordEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const repasswordEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const signUpEntity = useInjection(SignUpEntity);

    //const userSignup = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    const {isValid, applyErrors, applyValidators} = useFormErrors();

    useEffect(()=>{
        applyValidators(["email", "password", "repassword"]);
    },[]);
        
    const ehOnSignup = async (e:any) : Promise<void> =>{            
        const pass1 = passwordEl.current?.value || "",
              pass2 = repasswordEl.current?.value || "";

        if(pass1 !== pass2){
            setValid(false);
            setMessage(locale.loc("common.0003"));
            return;
        }

        if(isValid()){
            setValid(true);
            signUpEntity.email = emailEl.current?.value || "";
            signUpEntity.password = passwordEl.current?.value || "";        
            let response :any = await dispatch(signupRequest(signUpProps.signupUsecase, signUpEntity));

            if(!response.success){
                setValid(false);
                setMessage(response.message);
            } else {
                setValid(true);
            }
            setLoading(false);
        } else {
            setValid(false);
            setMessage(locale.loc("common.0001"));
        }
    };

    const setErrors = (e:any, type : string): void => {
        const errorProps : ErrorProps = {e, type, message:""};

        applyErrors(errorProps);
    };

    return (
        <div className="form-wrapper">
            <Form>
                <Form.Group>
                    <Form.Label>{locale.loc("signup.0001")}</Form.Label>
                    <Form.Control type="email" ref={emailEl} onBlur= {(e)=> setErrors(e, "email")} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>{locale.loc("signup.0002")}</Form.Label>
                    <Form.Control type="password" ref={passwordEl} onBlur= {(e)=> setErrors(e, "password")} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>{locale.loc("signup.0003")}</Form.Label>
                    <Form.Control type="password" ref={repasswordEl} onBlur= {(e)=> setErrors(e, "repassword")} />
                </Form.Group>                
                <Container className="p-0">
                    <Row>
                        <Col>
                            <Form.Label className="col-form-label-sm">
                                <Link to="/">{locale.loc("signup.0004")}</Link>
                            </Form.Label>
                        </Col>
                        <Col className="col-text-right">
                            <Form.Label className="col-form-label-sm">
                                <Link to="/forgot-password">{locale.loc("common.0004")}</Link>
                            </Form.Label>
                        </Col>
                    </Row>
                </Container>
                <div className="d-grid gap-2 mt-3">
                    <Button variant="flat" onClick={(e)=>ehOnSignup(e)}>{locale.loc("signup.0005")}</Button>
                </div>
            </Form>
            <Loading loading={loading} />        
            {
                valid ?
                <></> :
                <AlertBox message={message} />
            }            
        </div>
    );
}

export default SignUp;
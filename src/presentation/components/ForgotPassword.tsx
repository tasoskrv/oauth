import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useInjection } from "../../di-container";
import { useDispatch, useSelector } from "react-redux";
import ForgotPasswordEntity from "../../domain/forgotpassword/ForgotPasswordEntity";
import { RootState } from "../../reducers";
import ForgotPasswordUsecase from "../../domain/forgotpassword/ForgotPasswordUsecase";
import { recoverRequest } from "../../actions";
import useFormErrors, { ErrorProps } from "../../core/UseFormErrors";
import Lang from "../../locale/Lang";

type ForgotPasswordProps = {
    forgotPasswordUsecase : ForgotPasswordUsecase
}

const ForgotPassword = (forgotPasswordProps:ForgotPasswordProps)=>{
    const locale = useInjection(Lang);
    const [valid, setValid] = useState(true);
    const [message, setMessage] = useState("");
    const emailEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const forgotPasswordEntity = useInjection(ForgotPasswordEntity);

    const userRecover = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();
    
    const {isValid, applyErrors, applyValidators} = useFormErrors();

    useEffect(()=>{
        applyValidators(["email"]);
    },[]);    
    
    if(userRecover.token){
        console.log(userRecover.token);
    }  

    const ehOnForgotPasword = (e:any) : void =>{
        if(isValid()){
            setValid(true);
            forgotPasswordEntity.email = emailEl.current?.value || "";
            dispatch(recoverRequest(forgotPasswordProps.forgotPasswordUsecase, forgotPasswordEntity));
        } else {
            setValid(false);
            setMessage(locale.loc("common.0001"));
        }
    };

    const setErrors = (e:any, type : string): void => {
        const errorProps : ErrorProps = {e,type, message:""};

        applyErrors(errorProps);
    };
    
    return (
        <div className="form-wrapper">
            <Form>
                <Form.Group>
                    <Form.Label>{locale.loc("forgot.0001")}</Form.Label>
                    <Form.Control type="email" ref={emailEl} onBlur= {(e)=> setErrors(e, "email")} />
                </Form.Group>
                <Container className="p-0">
                    <Row>
                        <Col>
                            <Form.Label className="col-form-label-sm">
                                <Link to="/">{locale.loc("forgot.0002")}</Link>
                            </Form.Label>
                        </Col>                        
                    </Row>
                </Container>
                <div className="d-grid gap-2 mt-3">
                    <Button variant="flat" onClick={(e)=>ehOnForgotPasword(e)}>{locale.loc("forgot.0003")}</Button>
                </div>
            </Form>
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

export default ForgotPassword;
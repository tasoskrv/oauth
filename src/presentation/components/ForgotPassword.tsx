import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useInjection } from "../../di-container";
import { useDispatch } from "react-redux";
import ForgotPasswordEntity from "../../domain/forgotpassword/ForgotPasswordEntity";
import ForgotPasswordUsecase from "../../domain/forgotpassword/ForgotPasswordUsecase";
import { recoverRequest } from "../../actions";
import useFormErrors, { ErrorProps } from "../../core/UseFormErrors";
import Lang from "../../locale/Lang";
import Loading from "../../core/Loading";
import MessageBox from "../../core/MessageBox";

type ForgotPasswordProps = {
    forgotPasswordUsecase : ForgotPasswordUsecase
}

const ForgotPassword = (forgotPasswordProps:ForgotPasswordProps)=>{
    const locale = useInjection(Lang);
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(true);
    const [reset, setReset] = useState(false);
    const [message, setMessage] = useState("");

    const formEl = useRef<HTMLFormElement>(null);
    const emailEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const forgotPasswordEntity = useInjection(ForgotPasswordEntity);
    
    const dispatch = useDispatch();
    
    const {isValid, applyErrors, applyValidators, emailValidation} = useFormErrors(["email"]);

    useEffect(()=>{
        applyValidators(["email"]);
    },[]);    
    

    const isFormValid = ()=>{
        const email = emailEl.current?.value || "";
debugger;
        if(!emailValidation(email)){
            setMessage(locale.loc("common.0006"));            
            return false;
        }
        
        if(!isValid()){            
            setMessage(locale.loc("common.0001"));
            return false;
        }
        
        return true;
    }

    const ehOnForgotPasword = async (e:any) : Promise<void> =>{
        if(isFormValid()){
            setValid(true);
            setLoading(true);
            forgotPasswordEntity.email = emailEl.current?.value || "";
            
            let response :any = await dispatch(recoverRequest(forgotPasswordProps.forgotPasswordUsecase, forgotPasswordEntity));
debugger;
            if(!response.success){
                setValid(false);
                setMessage(response.message);
            } else{
                setValid(true);
                setReset(true);
                setMessage(locale.loc("forgot.0004"));
                formEl.current?.reset();
            }
            setLoading(false);
        } else {
            setValid(false)
            setLoading(false);
        }
    };

    const setErrors = (e:any, type : string): void => {
        const errorProps : ErrorProps = {e,type};

        applyErrors(errorProps);
    };
    
    return (
        <div className="form-wrapper">
            <Form ref={formEl}>
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
            <Loading loading={loading} />
            {
                valid ?
                <></> :
                <MessageBox message={message} type="error"/>
            }
            {
                reset ?
                <MessageBox message={message} type={"success"} /> :
                <></>  
            }            
        </div>
    );
}

export default ForgotPassword;
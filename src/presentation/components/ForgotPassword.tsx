import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Col, Container, Form, FormControl, Row, Spinner } from "react-bootstrap";
import { useInjection } from "../../di-container";
import { useDispatch, useSelector } from "react-redux";
import ForgotPasswordEntity from "../../domain/forgotpassword/ForgotPasswordEntity";
import { RootState } from "../../reducers";
import ForgotPasswordUsecase from "../../domain/forgotpassword/ForgotPasswordUsecase";
import { recoverRequest } from "../../actions";
import useFormErrors, { ErrorProps } from "../../core/UseFormErrors";
import Lang from "../../locale/Lang";
import AlertBox from "../../core/AlertBox";
import Loading from "../../core/Loading";

type ForgotPasswordProps = {
    forgotPasswordUsecase : ForgotPasswordUsecase
}

const ForgotPassword = (forgotPasswordProps:ForgotPasswordProps)=>{
    const locale = useInjection(Lang);
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(true);
    const [message, setMessage] = useState("");
    const emailEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const forgotPasswordEntity = useInjection(ForgotPasswordEntity);

    //const userRecover = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();
    
    const {isValid, applyErrors, applyValidators} = useFormErrors();

    useEffect(()=>{
        applyValidators(["email"]);
    },[]);    
    
    const ehOnForgotPasword = async (e:any) : Promise<void> =>{
        if(isValid()){
            setValid(true);
            setLoading(true);
            forgotPasswordEntity.email = emailEl.current?.value || "";
            debugger;
            let response :any = await dispatch(recoverRequest(forgotPasswordProps.forgotPasswordUsecase, forgotPasswordEntity));

            if(!response.success){
                setValid(false);
                setMessage(response.message);
            } else{
                //DO pop up
                setValid(false);
            }
            setLoading(false);
        } else {
            setValid(false)
            setLoading(false);
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
            <Loading loading={loading} />
            {
                valid ?
                <></> :
                <AlertBox message={message} />
            }
        </div>
    );
}

export default ForgotPassword;
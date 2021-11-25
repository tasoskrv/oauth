import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useInjection } from "../../di-container";
import { useDispatch, useSelector } from "react-redux";
import ForgotPasswordEntity from "../../domain/forgotpassword/ForgotPasswordEntity";
import { RootState } from "../../reducers";
import ForgotPasswordUsecase from "../../domain/forgotpassword/ForgotPasswordUsecase";
import { recoverRequest } from "../../actions";
import UseFormErrors, { ErrorProps } from "../../core/UseFormErrors";

type ForgotPasswordProps = {
    forgotPasswordUsecase : ForgotPasswordUsecase
}

const ForgotPassword = (forgotPasswordProps:ForgotPasswordProps)=>{
    const [hasErrors, setHasErrors] = useState<string[]>(["email"]);
    const [valid, setValid] = useState(true);
    const emailEl = useRef<HTMLInputElement & typeof FormControl>(null);
    const forgotPasswordEntity = useInjection(ForgotPasswordEntity);

    const userRecover = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();
    
    if(userRecover.token){
        console.log(userRecover.token);
    }  

    const ehOnForgotPasword = (e:any) : void =>{
        const errorProps : ErrorProps = {e,hasErrors,setHasErrors, type : "sds", message:"" };
        const {isValid} = UseFormErrors(errorProps);

        if(isValid()){
            setValid(true);
            forgotPasswordEntity.email = emailEl.current?.value || "";
            dispatch(recoverRequest(forgotPasswordProps.forgotPasswordUsecase, forgotPasswordEntity));
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
                <Container className="p-0">
                    <Row>
                        <Col>
                            <Form.Label className="col-form-label-sm">
                                <Link to="/">Login</Link>
                            </Form.Label>
                        </Col>                        
                    </Row>
                </Container>
                <div className="d-grid gap-2 mt-3">
                    <Button variant="flat" onClick={(e)=>ehOnForgotPasword(e)}>Send</Button>
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

export default ForgotPassword;
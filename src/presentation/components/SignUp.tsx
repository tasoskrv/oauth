import React, { useEffect, useState } from "react";
import SignUpUsecase from "../../domain/signup/SignUpUsecase";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

type SignUpProps = {

}

const SignUp = (signUpProps:SignUpProps)=>{
    return (
        <div className="login-wrapper">
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Re enter password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>                
                <Container className="">
                    <Row className="">
                        <Col className="p-0"><Form.Label className="col-form-label-sm"><Link to="/">Login</Link></Form.Label></Col>
                        <Col className="p-0 col-forgot-password"><Form.Label className="col-form-label-sm forgot-password">Forgot password?</Form.Label></Col>
                    </Row>
                </Container>
                <div className="d-grid gap-2 mt-3">
                    <Button variant="flat">Sign Up</Button>
                </div>
            </Form>
        </div>
    );
}

export default SignUp;
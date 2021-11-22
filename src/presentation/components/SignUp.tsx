import React, { useEffect, useState } from "react";
import SignUpUsecase from "../../domain/signup/SignUpUsecase";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

type SignUpProps = {

}

const SignUp = (signUpProps:SignUpProps)=>{
    return (
        <div className="form-wrapper">
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
                    <Button variant="flat">Sign Up</Button>
                </div>
            </Form>
        </div>
    );
}

export default SignUp;
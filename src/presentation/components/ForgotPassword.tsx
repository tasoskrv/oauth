import React, { useEffect, useState } from "react";
import SignUpUsecase from "../../domain/signup/SignUpUsecase";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

type ForgotPasswordProps = {

}

const ForgotPassword = (forgotPasswordProps:ForgotPasswordProps)=>{
    return (
        <div className="form-wrapper">
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
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
                    <Button variant="flat">Send</Button>
                </div>
            </Form>
        </div>
    );
}

export default ForgotPassword;
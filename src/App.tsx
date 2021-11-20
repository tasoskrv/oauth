import 'reflect-metadata';
import Login from './presentation/components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from './presentation/components/SignUp';
import LoginUsecase from './domain/login/LoginUsecase';
import { useInjection } from './di-container';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import SignUpUsecase from './domain/signup/SignUpUsecase';

function App() {
  const loginUsecase = useInjection(LoginUsecase);

  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col>
            <Router>
              <Routes>
                  <Route path="/" element={
                    <Login 
                      loginUsecase={loginUsecase} 
                    />} 
                  />
                  <Route path="signup" element={
                    <SignUp 

                    />} 
                  />
              </Routes>          
            </Router>            
          </Col>
          <Col><img width="20%" src="https://www.thoughtco.com/thmb/6NNZQHeEhR-wNWA8pZrm1MXtrAs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/clouds-5b6b4e50c9e77c0050491212.jpg"/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

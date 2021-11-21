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
      <Container className="h-100">
        <Row className="h-100">
          <Col className="first-col p-0">
          <div className="cloudocean">cloud<span className="ocean">Ocean</span></div>
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
          {/* <Col className="second-col p-0">            
            <div className="bg h-100"></div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default App;

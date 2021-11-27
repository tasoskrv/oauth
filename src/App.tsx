import 'reflect-metadata';
import Login from './presentation/components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from './presentation/components/SignUp';
import LoginUsecase from './domain/login/LoginUsecase';
import { useInjection } from './di-container';
import { Container, Row, Col, NavDropdown } from 'react-bootstrap';
import SignUpUsecase from './domain/signup/SignUpUsecase';
import ForgotPassword from './presentation/components/ForgotPassword';
import ForgotPasswordUsecase from './domain/forgotpassword/ForgotPasswordUsecase';
import Lang from './locale/Lang';

function App() {  
  const loginUsecase = useInjection(LoginUsecase);
  const forgotPasswordUsecase = useInjection(ForgotPasswordUsecase);
  const signupUsecase = useInjection(SignUpUsecase);
  
  const locale = useInjection(Lang);
  const language = locale.loc("common.0005");

  return (
    <div className="wrapper">
        <NavDropdown className="select-lang" title={language}>
          <NavDropdown.Item href="?lg=el"><img src="../gr.png"/> Ελληνικά</NavDropdown.Item>
          <NavDropdown.Item href="?lg=en"><img src="../uk.png"/> English</NavDropdown.Item>
        </NavDropdown>
      <Container className="h-100">
        <Row>
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
                      signupUsecase={signupUsecase}
                    />} 
                  />
                  <Route path="forgot-password" element={
                    <ForgotPassword
                      forgotPasswordUsecase={forgotPasswordUsecase}
                    />} 
                  />                  
              </Routes>          
            </Router>            
          </Col>
        </Row>        
      </Container>     
      <a href="" target="_blank" className="terms">{locale.loc("common.0002")}</a>          
    </div>
  );
}

export default App;

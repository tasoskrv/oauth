import 'reflect-metadata';
import Login from './presentation/components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from './presentation/components/SignUp';
import LoginUsecase from './domain/login/LoginUsecase';
import { useInjection } from './di-container';
import { Container, Row, Col } from 'react-bootstrap';
import SignUpUsecase from './domain/signup/SignUpUsecase';
import ForgotPassword from './presentation/components/ForgotPassword';
import ForgotPasswordUsecase from './domain/forgotpassword/ForgotPasswordUsecase';
import Lang from './locale/Lang';

function App() {
  const loginUsecase = useInjection(LoginUsecase);
  const forgotPasswordUsecase = useInjection(ForgotPasswordUsecase);
  const signupUsecase = useInjection(SignUpUsecase);
  debugger;
  const locale = useInjection(Lang);

  return (
    <div className="wrapper">       
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
      <a href="" target="_blank" className="terms">{locale.loc("login.0001")}</a>          
    </div>
  );
}

export default App;

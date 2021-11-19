import 'reflect-metadata';
import Login from './presentation/components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from './presentation/components/SignUp';
import LoginUsecase from './domain/login/LoginUsecase';
import { useInjection } from './di-container';

function App() {
  const loginUsecase = useInjection(LoginUsecase);

  return (
    <div style={{margin:'auto', width:500}}>
      <Router>
        <Link to="/">Login</Link>
        <Link to="/signup">SignUp</Link>
        <br/><br/>
        <Routes>
            <Route path="/" element={<Login loginUsecase={loginUsecase}/>} />
            <Route path="signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

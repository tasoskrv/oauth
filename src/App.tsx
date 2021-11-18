import 'reflect-metadata';
import React from 'react';
import Login from './presentation/components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from './presentation/components/SignUp';
import LoginRepositoryImpl from './infrastructure/apis/LoginRepositoryImpl';
import LoginUsecase from './domain/LoginUsecase';

import { DateStringService } from './date-string.service';
import { useInjection } from './react-binding';

function App() {
    debugger;
    const repo = new LoginRepositoryImpl(); 
    const usecase = new LoginUsecase(repo);

    const dateStringService = useInjection(DateStringService);

  return (
    <div style={{margin:'auto', width:500}}>
        {dateStringService.getDateString()}
      <Router>
        <Link to="/">Login</Link>
        <Link to="/signup">SignUp</Link>
        <br/><br/>

        <Routes>
            <Route path="/" element={<Login usecase={usecase}/>} />
            <Route path="signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

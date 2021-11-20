import React, { useEffect, useState } from "react";
import SignUpUsecase from "../../domain/signup/SignUpUsecase";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

type SignUpProps = {

}

const SignUp = (signUpProps:SignUpProps)=>{

    return (
        <div style={{margin:'auto', width:500}}>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>username</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="password" /></td>
                        </tr>
                        <tr>
                            <td>re enter password</td>
                            <td><input type="password" /></td>
                        </tr>
                    </tbody>                    
                </table>          
                <input type="button" value="Sign Up" />                  
            </form>            
            {/* <Router> */}
                <Link to="/">Login</Link>
            {/* </Router> */}

        </div>
    );
}

export default SignUp;
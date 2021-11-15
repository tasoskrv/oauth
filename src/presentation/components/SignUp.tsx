import React from "react";

const SignUp = ()=>{
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
        </div>
    );
}

export default SignUp;
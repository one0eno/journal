import React from "react";
import { 
   
    BrowserRouter as Router,
      Route,
      Routes,
        Navigate, Outlet
     } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
import JournalScreen from "../components/journal/JournalScreen";
import '../styles/styles.scss'


export default function AuthRouter(){

   
    return (
    <div className="auth__main">    
        <div className="auth__box-container">
          <Routes> 
            <Route  path="login" element={ <LoginScreen /> } />
            <Route  path="register" element={ <RegisterScreen /> } />
            <Route path="/*" element={<Navigate  to="Login" />} />
          </Routes>
        </div>
      
    </div>
    )
}
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouters";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

import { startLoadingNotes } from "../actions/notes";

export default function AppRouter() {

  console.log("NODE_ENV",process.env.NODE_ENV)
  console.log("CLOUDINARY",process.env.REACT_APP_CLOUDINARY_URL)

  const dispatch = useDispatch()
  const [checking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => { 

    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
       console.log(user)
      if (user?.uid){
        //estoy autenticado
          dispatch(login(user.uid, user.displayName))
          setIsLoggedIn(true)

          //recuperamos las notas
          dispatch(startLoadingNotes(user.uid))

      } else {
        setIsLoggedIn(false)
      }
      
      setCheking(false)

    })

  }, [dispatch, setCheking, setIsLoggedIn]);

  if(checking){
    return (
      <h1>Espere...</h1>
    )
  }
  
  return (
   
      isLoggedIn ? <JournalScreen /> : (
        <Router>
          <Routes>
            <Route path="/auth" element={ <AuthRouter />} />
            <Route path="/auth/*" element={<AuthRouter />} /> 
            <Route path="/*" element={<Navigate  to="/auth/Login" />} />
          </Routes>
        </Router>
        )
      
  );
}

{/* <Router>
    <Routes>
      <Route path="/auth" element={ <AuthRouter />} />
      <Route path="/auth/*" element={<AuthRouter />} /> 
      <Route path="/journal" element={<JournalScreen />} />
      <Route path="/*" element={<Navigate  to="/auth/Login" />} />
    </Routes>
    </Router> */}
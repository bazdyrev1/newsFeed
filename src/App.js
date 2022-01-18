import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context";

import "./styles/App.css";



function App() {

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  },[])

  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <Router>
        <Navbar/>
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  )
}

export default App;

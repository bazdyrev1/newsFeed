import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";

import { publicRoutes, privateRoutes } from "../router";


const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)
  console.log(isAuth)
    return (
        isAuth 
          ? <Routes>
          {privateRoutes.map(route => 
            <Route element={route.element} path={route.path} exact={route.exact} key={route.path}/>
          )}
        </Routes>
          : <Routes>
          {publicRoutes.map(route => 
            <Route element={route.element} path={route.path} exact={route.exact} key={route.path}/>
          )}
        </Routes>
        
      

    
    )
}

export default AppRouter;
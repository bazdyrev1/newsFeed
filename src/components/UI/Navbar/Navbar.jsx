import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";


const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext)
  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  
    return(
        <div className="navbar">
          <MyButton onClick={logOut} >Log out</MyButton>
        <div className="navbar__links">
          <nav>
            <Link to="/posts">Posts</Link> |{" "}
            <Link to="/about">About</Link>
          </nav>
        </div>
      </div>
    )
}

export default Navbar;
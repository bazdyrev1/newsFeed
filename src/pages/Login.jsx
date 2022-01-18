import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    } 

    return(
        <div>
            <h1>  Login Page </h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Your login' />
                <MyInput type='password' placeholder='Your password' />
                <MyButton>Log In</MyButton>
            </form>
        </div>
        )
}

export default Login;
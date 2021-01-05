import React, {useState} from 'react';
import "../Css/Login.css"
import {Link, useHistory} from "react-router-dom"
import { auth } from "../Components/firebase"

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // logged in successfully, redirecting
            history.push("/");
        })
        .catch(e => alert(e.message));

    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            // created user and logged in...
            history.push("/");
        }) 
        .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="https://1000marcas.net/wp-content/uploads/2019/11/Logo-Amazon.png" alt=""
                className="login__logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to our terms and conditions and our use of cookies.</p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

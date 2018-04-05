import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import store from '../../store/configureStore';
import './style.scss';
import logo from '../../assets/images/logo.png';
import login_button from '../../assets/images/login_button.png';

class Login extends Component{
    render() {
        if (localStorage.getItem('currentUser')) {
            return (
                <Redirect to="/"/>
            );  
        }

        return (
            <div className="login">
                <LoginWrapper />
            </div>
        );
    }
}

const LoginWrapper = () => {
    return (
        <div className="wrapper">
            <div className="login-wrapper">
                <LogoAndTitle />
                <Tagline />
                <SignInButton />
                <SignInErrorMessage />
            </div>
        </div>
    );
}

const LogoAndTitle = () => {
    return (
        <div className="logo-and-title">
            <img src={logo} alt="Logo"/>
            <span className="app-name">Andela Buddy</span>
        </div>
    );
}

const Tagline = () => {
    return (
        <p className="tag-line">
            Plan and discover activities that you can get involved in with other Andelans.
        </p>
    );
}

const SignInButton = () => {
    return (
        <a href="https://api-staging.andela.com/login?redirect_url=http://localhost:3000/auth/">
            <img className="sign-in-button" src={login_button} alt="Login With Andela Email"/>
        </a>
    );
}

const SignInErrorMessage = () => {
    if (store.getState().loginErrorStatus) {
        return (
            <div className="sign-in-error-msg">
                <span>
                    <p>
                        Hello! It seems you do not have permission to access this application. Login using an Andela email address.
                </p>
                </span>
            </div>
        )
    }
    return ''
}

export default Login;

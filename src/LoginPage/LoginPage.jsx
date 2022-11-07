import React from 'react';
import LoginForm from '../LoginForm';
import CSS from './LoginPage.module.css';
import logo from '../images/logo.png';

const LoginPage = () => {
    return (
        <React.Fragment>
            <div>
                <img id={CSS.logo} src={logo} alt="Vault Tech Logo" />
            </div>
            <h1 className={CSS.text}>Log In</h1>
            <LoginForm />
        </React.Fragment>
    );
}

export default LoginPage;

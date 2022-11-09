import React, { useState } from 'react';
import LoginForm from '../LoginForm';
import CSS from './LoginPage.module.css';
import vault from '../images/vault.png'

const LoginPage = () => {
    const [user, setUser] = useState({});

    return (
        <React.Fragment>
            <div className={CSS.imageContainer}>
                <img id={CSS.vault} src={vault} alt="Vault Tech Logo" />
            </div>
            <h2 className={CSS.text}>Log In</h2>
            <LoginForm user={user} setUser={setUser} />
        </React.Fragment>
    );
}

export default LoginPage;

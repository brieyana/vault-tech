import React from 'react';
import CSS from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <div className={CSS.container}>
            <form>
                <div className={CSS.input}>
                    <label className={CSS.label} for="email">Email</label>
                    <input className={CSS.box} type="text" id="email" name="email" placeholder="your_email@example.com" />
                </div>

                <div className={CSS.input}>
                    <label className={CSS.label} for="password">Password</label>
                    <input className={CSS.box} type="text" id="password" name="password" placeholder="Password" />
                </div>

                <div className={CSS.buttonContainer}>
                    <button className={CSS.button}>Log in</button>
                </div>
                <p className={CSS.text}>New to Vault Tech? Sign up <a href="#">here</a></p>
            </form>  
        </div>
    );
}

export default LoginForm;
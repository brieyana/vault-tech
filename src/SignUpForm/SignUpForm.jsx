import React, { useState } from 'react';
import CSS from './SignUpForm.module.css';
import { userFields } from '../constants';
import { instance } from '../client';
import vault from '../images/vault.png';

const SignUpForm = () => {
    const [user, setUser] = useState({});

    const createUserAccount = async (data) => {
        const { username, password, email, firstName, lastName } = data;
        const res = await instance.post('/users/create_account', {
            email: email,
            first_name: firstName,
            last_name: lastName,
            username: username,
            password: password
        });

        return res.data;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // add routing
        createUserAccount(user)
            .then(() => {
                console.log('success!')
            })
            .catch(() => {
                console.log('failure!')
            })
    }

    const onFormChange = (e) => {
        const { name, value } = e.target;
        const u = user;

        switch (name) {
            case userFields.EMAIL:
                u[userFields.EMAIL] = value;
                break;
            case userFields.FIRST_NAME:
                u[userFields.FIRST_NAME] = value;
                break;
            case userFields.LAST_NAME:
                u[userFields.LAST_NAME] = value;
                break;
            case userFields.USERNAME:
                u[userFields.USERNAME] = value;
                break;
            case userFields.PASSWORD:
                u[userFields.PASSWORD] = value;
                break;
            default:
                break;
        }

        setUser(u);
    }

    return (
        <React.Fragment>
            <div id={CSS.header}>
                <h1>Vault Tech</h1>
            </div>
            <div className={CSS.imageContainer}>
                <img id={CSS.vault} src={vault} alt="Vault Tech Logo" />
            </div>
            <h2 className={CSS.subheading}>Sign Up</h2>
            <div className={CSS.container}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={CSS.input}>
                        <label className={CSS.label} htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className={CSS.inputBox}
                            required
                            onChange={(e) => onFormChange(e)}
                            placeholder="Enter email"
                        />
                    </div>
                    <div className={CSS.input}>
                        <label className={CSS.label} htmlFor="firstName">First name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            className={CSS.inputBox}
                            required
                            onChange={(e) => onFormChange(e)}
                            placeholder="Enter first name"
                        />
                    </div>

                    <div className={CSS.input}>
                        <label className={CSS.label} htmlFor="lastName">Last name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            className={CSS.inputBox}
                            required
                            onChange={(e) => onFormChange(e)}
                            placeholder="Enter last name"
                        />
                    </div>

                    <div className={CSS.input}>
                        <label className={CSS.label} htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className={CSS.inputBox}
                            required
                            onChange={(e) => onFormChange(e)}
                            placeholder="Enter username"
                        />
                    </div>

                    <div className={CSS.input}>
                        <label className={CSS.label} htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className={CSS.inputBox}
                            required
                            onChange={(e) => onFormChange(e)}
                            placeholder="Enter password"
                        />
                    </div>

                    <div className={CSS.buttonContainer}>
                        <button type="submit" className={CSS.button}>Sign up</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default SignUpForm;
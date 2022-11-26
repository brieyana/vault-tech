import React, { useState } from 'react';
import { instance } from '../client';
import CSS from './LoginForm.module.css';
import vault from '../images/vault.png';
import { Link } from 'react-router-dom';

// form component
const LoginForm = ({ user, setUser }) => {
    // set state
    const [errorMessage, setErrorMessage] = useState('');
    const [users, setUsers] = useState({});

    // sends request to server
    const getUserData = async (data) => {
        const { username, password } = data;
        const res = await instance.get(`/users/get_user_account?username=${username}&password=${password}`);

        return res.data;
    }

    // when user submits form, send request
    const handleSubmit = (e) => {
        // prevents page from refreshing on form submit
        e.preventDefault();

        // calls function that sends request
        getUserData(user)
            .then(u => {
                // update current user
                setUser(u);

                // adds user to users state
                setUsers({
                    ...users,
                    [u.id]: {
                        username: u.username,
                        firstName: u.first_name,
                        lastName: u.last_name
                    }
                });

                // resets error message
                setErrorMessage('');

                // TO DO: navigate user to dashboard
            })
            .catch(() => {
                setErrorMessage('Invalid username or password');
            });
    }

    // updates user object in state
    const onFormChange = (e) => {
        const { name, value } = e.target;
        const u = user;

        switch (name) {
            case 'username':
                u.username = value;
                break;
            case 'password':
                u.password = value;
                break;
            default:
                u.error = true;
                break;
        }

        if (!u.error) {
            setUser(u);
        }
    }

    return (
        <React.Fragment>
            <div id={CSS.header}>
                <h1>Vault Tech</h1>
            </div>
            <div className={CSS.imageContainer}>
                <img id={CSS.vault} src={vault} alt="Vault Tech Logo" />
            </div>
            <h2 className={CSS.subheading}>Log In</h2>
            <div className={CSS.container}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={CSS.input}>
                        {errorMessage.length > 0 && <p className={CSS.error}>{errorMessage}</p>}
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
                    <p><Link className={CSS.link} to="../forgot_password">Forgot password?</Link></p>

                    <div className={CSS.buttonContainer}>
                        <button type="submit" className={CSS.button}>Log in</button>
                    </div>

                    <p className={CSS.text}>New to Vault Tech? Sign up <Link className={CSS.link} to="../signup">here</Link></p>
                </form>
            </div>
        </React.Fragment>
    );
}

export default LoginForm;

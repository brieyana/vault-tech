import React, { useState } from 'react';
import LoginForm from '../LoginForm';

const LoginPage = () => {
    const [user, setUser] = useState({});

    return (
        <React.Fragment>
            <LoginForm user={user} setUser={setUser} />
        </React.Fragment>
    );
}

export default LoginPage;

import React, {Component, useRef} from 'react';
import {register} from "../../domain/model/UserUseCases";
import {useRouterContext, withRouterContext} from "../../../../general/context/RouterContext";

const RegistrationPage = () => {
    const {switchPath} = useRouterContext();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const userNameRef = useRef(null);

    const handleRegistrationSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const userName = userNameRef.current.value;
        console.log(email, password, userName);
        await register(email, password, userName);
        switchPath('login');
    }
    const handleMoveToLogin = () => {
        switchPath('login');
    }

    return (
        <div>
            <h1>Registration Page</h1>
            <form onSubmit={handleRegistrationSubmit}>
                <input type="text"
                       ref={emailRef}
                       placeholder="Email"/>
                <input type="text"
                       ref={userNameRef}
                       placeholder="Username"/>
                <input type="password"
                       ref={passwordRef}
                       placeholder="Password"/>
                <input type="submit" value="Register"/>
            </form>
            <button onClick={handleMoveToLogin}>Move to login</button>
        </div>
    );
}

export default RegistrationPage;
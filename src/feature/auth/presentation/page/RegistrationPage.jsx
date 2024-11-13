import React, {Component, useEffect, useRef} from 'react';
import {register} from "../../domain/model/UserUseCases";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerAsyncAction} from "../redux/registerAsyncAction";

const RegistrationPage = () => {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const userNameRef = useRef(null);

    const dispatch = useDispatch();
    const {isAuthenticated} = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/words');
        }
    }, [isAuthenticated, navigate]);

    const handleRegistrationSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const userName = userNameRef.current.value;
        console.log(email, password, userName);
        dispatch(registerAsyncAction({email, password, userName} ));
    }
    const handleMoveToLogin = () => {
        navigate('/login');
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

import React, {Component, useEffect, useRef} from 'react';
import {login, logout} from "../../domain/model/UserUseCases";
import style from './LoginPage.module.css';
import banner from '../../../../assets/login_back.png';
import {Title} from "../../../../general/styled_components/Title";
import {Subtitle} from "../../../../general/styled_components/Subtitle";
import {GoogleLoginButton} from "../../../../general/styled_components/GoogleLoginButton";
import {useRouterContext, withRouterContext} from "../../../../general/context/RouterContext";

const LoginPage = ()=>{
    const {switchPath} = useRouterContext();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        console.log('Component did mount')
        logout().then(() => {
            console.log('Logged out')
        });
    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        const user = await login(email, password);
        switchPath('words');
        console.log(user);
    }

    const handleMoveToRegistration = () => {
        switchPath('registration');
    }
    return (
        <main className={style.main}>
            <article className={style.login_box}>
                <form className={style.login_box_form}
                      onSubmit={
                          (event) => handleFormSubmit(event)}>
                    <section>
                        <Title className={style.login_box_title}>Welcome Back!</Title>
                        <Subtitle className={style.login_box_subtitle}>We can assign tasks, set
                            deadlines, and track progress effortlessly.</Subtitle>
                    </section>

                    <label htmlFor="email">Email</label>
                    <input type="text"
                           ref={emailRef}
                           placeholder="Email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           ref={passwordRef}
                           placeholder="Password"/>
                    <section>
                        <input type="submit" value="Login"/>
                        <GoogleLoginButton/>
                    </section>

                    <button onClick={handleMoveToRegistration}>Sign Up</button>
                </form>
            </article>
            <div className={style.banner_box}>
                <img className={style.banner_image} src={banner} alt="banner"/>
            </div>
        </main>
    );
}

export default LoginPage;
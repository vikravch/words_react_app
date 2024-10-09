import React, {Component} from 'react';
import {login, logout} from "../../domain/model/UserUseCases";
import style from './LoginPage.module.css';
import banner from '../../../../assets/login_back.png';
import {Title} from "../../../../general/styled_components/Title";
import {Subtitle} from "../../../../general/styled_components/Subtitle";
import {GoogleLoginButton} from "../../../../general/styled_components/GoogleLoginButton";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    componentDidMount() {
        console.log('Component did mount')
        logout().then(()=>{
            console.log('Logged out')
        });
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const email = this.emailRef.current.value;
        const password = this.passwordRef.current.value;
        const user = await login(email, password);
        this.props.switchPath('words');
        console.log(user);
    }
    handleMoveToRegistration = () => {
        this.props.switchPath('registration');
    }
    render() {
        return (
            <main className={style.main}>
                <article className={style.login_box}>
                    <form className={style.login_box_form} onSubmit={this.handleFormSubmit}>
                        <section>
                            <Title className={style.login_box_title} >Welcome Back!</Title>
                            <Subtitle className={style.login_box_subtitle}>We can assign tasks, set deadlines, and track progress effortlessly.</Subtitle>
                        </section>

                        <label htmlFor="email">Email</label>
                        <input type="text"
                               ref={this.emailRef}
                               placeholder="Email"/>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               ref={this.passwordRef}
                               placeholder="Password"/>
                        <section>
                            <input type="submit" value="Login"/>
                            <GoogleLoginButton/>
                        </section>

                        <button onClick={this.handleMoveToRegistration}>Sign Up</button>
                    </form>
                </article>
                <div className={style.banner_box}>
                    <img className={style.banner_image} src={banner} alt="banner"/>
                </div>
            </main>
        );
    }
}

export default LoginPage;
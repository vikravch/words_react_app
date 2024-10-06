import React, {Component} from 'react';
import {login, logout} from "../../domain/model/UserUseCases";

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
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text"
                           ref={this.emailRef}
                           placeholder="Email"/>
                    <input type="password"
                           ref={this.passwordRef}
                           placeholder="Password"/>
                    <input type="submit" value="Login"/>
                </form>
                <button onClick={this.handleMoveToRegistration}>Move to registration</button>

            </div>
        );
    }
}

export default LoginPage;
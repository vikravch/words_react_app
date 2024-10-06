import React, {Component} from 'react';
import {register} from "../../domain/model/UserUseCases";

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.userNameRef = React.createRef();
    }
    handleRegistrationSubmit = async (event) => {
        event.preventDefault();
        const email = this.emailRef.current.value;
        const password = this.passwordRef.current.value;
        const userName = this.userNameRef.current.value;
        console.log(email, password, userName);
        register(email, password, userName);
    }
    handleMoveToLogin = () => {
        this.props.switchPath('login');
    }
    render() {
        return (
            <div>
                <h1>Registration Page</h1>
                <form onSubmit={this.handleRegistrationSubmit}>
                    <input type="text"
                           ref={this.emailRef}
                           placeholder="Email"/>
                    <input type="text"
                           ref={this.userNameRef}
                           placeholder="Username"/>
                    <input type="password"
                           ref={this.passwordRef}
                           placeholder="Password"/>
                    <input type="submit" value="Register"/>
                </form>
                <button onClick={this.handleMoveToLogin}>Move to login</button>
            </div>
        );
    }
}

export default RegistrationPage;
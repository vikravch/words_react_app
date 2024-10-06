import React, {Component} from 'react';

class TrainWordPage extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.switchPath('login')
                }}>Log out</button>
                <h1>Train Word Page</h1>
            </div>
        );
    }
}

export default TrainWordPage;
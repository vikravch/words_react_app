import React, {Component} from 'react';

class ErrorMessage extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('ErrorMessage shouldComponentUpdate');
        const errorChanged = this.props.error !== nextProps.error;
        console.log('errorChanged', errorChanged);
        return errorChanged;
    }
    componentWillUnmount() {
        console.log('ErrorMessage componentWillUnmount');
    }

    render() {
        console.log('ErrorMessage render');
        return (
            <div>
                {
                    this.props.error && <p>{this.props.error}</p>
                }
            </div>
        );
    }
}

export default ErrorMessage;
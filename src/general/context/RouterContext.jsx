import React from "react";
export const RouterContext = React.createContext({});

// withRouterContext for class component
export function withRouterContext(Component) {
    return function WrappedComponent(props) {
        return (
            <RouterContext.Consumer>
                {value => <Component {...props}
                                     switchPath={value.switchPath}
                                     currentPage={value.currentPath}
                />}
            </RouterContext.Consumer>
        );
    }
}

export class RouterContextWrapper extends React.Component{

    state = {
        currentPage: 'login'
    }
    switchPath = (path) => {
        this.setState({currentPage: path})
    }

    render() {
        return (
            <RouterContext.Provider value={{
                switchPath: this.switchPath,
                currentPath: this.state.currentPage
            }}>
                {this.props.children}
            </RouterContext.Provider>
        );
    }

}
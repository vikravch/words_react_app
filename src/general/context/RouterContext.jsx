import React, {useContext, useState} from "react";
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
export function RouterContextWrapper(props){
    const [routerData, setRouterData] = useState({
        currentPage: 'test'
    });
    const switchPath = (path) => {
        setRouterData({currentPage: path})
    }
    return (
        <RouterContext.Provider value={{
            switchPath: switchPath,
            currentPath: routerData.currentPage
        }}>
            {props.children}
        </RouterContext.Provider>
    );
}

export const useRouterContext = () => useContext(RouterContext);
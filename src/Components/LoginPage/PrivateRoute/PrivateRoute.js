import React, { useContext } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { dataContext } from '../../../App';
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {
    const {users,local} = useContext(dataContext);
    const user = users[0];
    const [Locate, setLocate] = local;
    const location = useLocation();
    setLocate(location.pathname)
    console.log(Locate);
    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
        const currentTime = new Date().getTime() / 1000;
        return decodedToken.exp > currentTime;
    }
    return (
        <Route
            {...rest}
            render={() =>
                (user.email || isLoggedIn()) ? (
                    children
                ) : (
                    <Redirect
                            to={'/login'}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
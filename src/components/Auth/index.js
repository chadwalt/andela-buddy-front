import React from 'react';
import { Redirect } from 'react-router';
import jwt_decode from 'jwt-decode';
import store from '../../store/configureStore';
import { addUser, setLoginErrorStatus } from '../../actions/index';

const Auth = () => {
    if (window.location.search) {
        const token = window.location.search.substring(7);
        const userInfo = jwt_decode(token).UserInfo;
        if (userInfo.roles.Guest) {
            store.dispatch(setLoginErrorStatus('true'));
            return (
                <Redirect to="/login" />
            );  
        }

        localStorage.setItem('currentUser', JSON.stringify(userInfo));
        store.dispatch(addUser(userInfo));
        return (
            <Redirect to="/" />
        )
    }
    return (
        <Redirect to="/" />
    )
}

export default Auth;

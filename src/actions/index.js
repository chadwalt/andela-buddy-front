/**
 * Action types
 */

export const LOGIN_USER = 'LOGIN_USER'
export const ADD_USER = 'ADD_USER';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export function loginUser(loginStatus) {
    return { type: LOGIN_USER, loginStatus}
}

export function addUser(userObject) {
    return { type: ADD_USER, userObject }
}

export function setLoginErrorStatus(status) {
    return { type: SET_LOGIN_ERROR, status }
}

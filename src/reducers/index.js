const initialState = {
    userInfo: null,
    loginErrorStatus: null,
    isLoggedIn: false
}

function andelaBuddyApp(state = initialState, action) {

    switch (action.type) {
        case 'ADD_USER':
            return { ...state, userInfo: action.userObject } 
        case 'SET_LOGIN_ERROR':
            return { ...state, loginErrorStatus: action.status }
        case 'LOGIN_USER':
            return { ...state, isLoggedIn: action.loginStatus }    
        default:
            return state 
    }
}

export default andelaBuddyApp;

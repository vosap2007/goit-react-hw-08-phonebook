const getIsAuthenticated = state => state.auth.token;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

export default {
    getIsAuthenticated,
    getUsername,
    getIsLoggedIn,
};
// useAuthToken.js

const useAuthToken = () => {
    const TOKEN_KEY = 'token';

    const getToken = () => localStorage.getItem(TOKEN_KEY);

    const saveToken = (token) => localStorage.setItem(TOKEN_KEY, token);

    const removeToken = () => localStorage.removeItem(TOKEN_KEY);

    const decode = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };

    const checkTokenExpiration = () => {
        const token = getToken();
        if (token) {
            const decodedToken = decode(token);
            const currentTime = Math.floor(Date.now() / 1000);
            if (decodedToken.exp < currentTime) {
                removeToken();
                return {
                    error: 'Token expired',
                    status: 401

                };
            } else {
                return {
                    token,
                    status: 200
                };
            }
        }
        else {
            return {
                error: 'No token found',
                status: 404
            };
        }

    };

    const updateToken = (token) => {
        if (token) {
            saveToken(token);
        } else {
            removeToken();
        }
    };

    return {
        getToken,
        saveToken: updateToken,
        removeToken,
        checkTokenExpiration,
    };
};

export default useAuthToken;
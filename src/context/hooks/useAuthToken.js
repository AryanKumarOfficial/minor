// useAuthToken.js

const useAuthToken = () => {

    /**
     * Retrieve token from local storage
     * @returns {string|null} the token if present, null otherwise
     */

    const getToken = () => localStorage.getItem('token');

    /**
     * Save token to local storage
     * @param {string} token the token to be saved
     */

    const saveToken = (token) => localStorage.setItem('token', token);

    /**
     * Remove token from local storage
     */

    const removeToken = () => localStorage.removeItem('token');

    /**
     * Update token in local storage. If token is provided, it is saved;
     * otherwise, the existing token is removed.
     * @param {string|null} token - the token to be saved
     */

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
    };
};

export default useAuthToken;
import JwtDecode from "jwt-decode";
const TOKEN = "token";


export const setTokenInLocalStorage = (encryptedToken) =>
    localStorage.setItem(TOKEN, encryptedToken);


export const getUser = () => {
    try {
        const user = localStorage.getItem(TOKEN);
        return JwtDecode(user);
    } catch (error) {
        return null;
    }
};


export const removeTokenFromLocalStorage = (encryptedToken) =>
    localStorage.removeItem(TOKEN, encryptedToken)


export const getTokenFromLocalStorage = (encryptedToken) =>
    localStorage.getItem(TOKEN, encryptedToken)



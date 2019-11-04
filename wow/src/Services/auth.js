export const TOKEN_KEY = '@apikey';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const getUser = () => localStorage.getItem('@apikey/username');
export const username = name => {
    localStorage.setItem('@apikey/username', name);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};
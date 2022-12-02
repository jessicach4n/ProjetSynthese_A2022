export const HOST = 'http://localhost:8888';
// export const HOST = 'http://www.react.com:80'

export const GET_IDS = "GET_IDS";
export const GET_ANIMATION = "GET_ANIMATION";
export const USERNAME = window.sessionStorage.getItem("username")
export const IS_LOGGED_IN = window.sessionStorage.getItem("session_id") != null ? true : false
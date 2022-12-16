export const HOST = 'http://localhost:8888';
// export const HOST = 'http://www.react.com:80'

export const GET_IDS = "GET_IDS";
export const GET_ANIMATION = "GET_ANIMATION";
export const GET_ANIMATION_INFO = "GET_ANIMATION_INFO";
export const GET_COUNT = "GET_COUNT";
export const USERNAME = window.sessionStorage.getItem("username")
export const IS_LOGGED_IN = window.sessionStorage.getItem("session_id") != null ? true : false
export const USER_LOCATION = {'city' : window.sessionStorage.getItem("city") != null ? window.sessionStorage.getItem("city") : "N/A",
                              'country' : window.sessionStorage.getItem("country") != null ? window.sessionStorage.getItem("country") : "N/A"} 
export const API_KEY = '49a356b49aac954413c95572fdd8c235';


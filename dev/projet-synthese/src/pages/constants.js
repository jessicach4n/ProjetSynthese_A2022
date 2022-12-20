/* 
Nom du fichier  : constants.js
Description     : Fichier comportant des constantes utiles au projet.
Auteurs         : Jessica Chan, Sebastian Perez 
*/

// export const HOST = 'http://localhost:8888'; À utiliser pour tester le site web localement
export const HOST = '';
export const GET_IDS = "GET_IDS";
export const GET_ANIMATION = "GET_ANIMATION";
export const GET_ANIMATION_INFO = "GET_ANIMATION_INFO";
export const GET_COUNT = "GET_COUNT";
export const GET_EMAIL_NUMBER = "GET_EMAIL_NUMBER"; 
export const USERNAME = window.sessionStorage.getItem("username");
export const IS_LOGGED_IN = window.sessionStorage.getItem("session_id") != null ? true : false;
export const USER_LOCATION = {'city' : window.sessionStorage.getItem("city") != null ? window.sessionStorage.getItem("city") : "N/A",
                              'country' : window.sessionStorage.getItem("country") != null ? window.sessionStorage.getItem("country") : "N/A"}; 
export const API_KEY = '49a356b49aac954413c95572fdd8c235';


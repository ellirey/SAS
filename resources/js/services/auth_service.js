import {http, httpFile} from './http_service';
import jwt from 'jsonwebtoken';
import store from '../store';


export function register(user){
    return http().post('/auth/register', user);
}



export function login(user){
    return http().post('/auth/login', user)
    .then(response => {
        if(response.status === 200) {
            setToken(response.data)
        }
        return response.data;
    });
}

function setToken(user){
    const token = jwt.sign({ user:user }, 'tcubusssatationasd;askjdlk;ajsd;ljas')
    localStorage.setItem('csvu-token', token);
    store.dispatch('authenticate', user.user);
}


export function isLoggedIn(){
    const token = localStorage.getItem('csvu-token');
    const tokenData = jwt.decode(token);
    return token != null;
}


export function getUserRole() {
    const token = localStorage.getItem('csvu-token');
    if (!token) {
        return null;
    }

    const tokenData = jwt.decode(token);
    console.log(tokenData.user.user.role)
    return tokenData.user.user.role;
}


export function getAccessToken(){
    const token = localStorage.getItem('csvu-token');
    if(!token){
        return null;
    }
    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;
}


export function checkerLogout(){
    http().get('/auth/logout');
    localStorage.removeItem('csvu-token');
}


export function getUserProfile(){
    // const token = localStorage.getItem('laravel-vue-spa-token');
    return http().get('/auth/user_profile');
}
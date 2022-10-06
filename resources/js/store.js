import Vue from 'vue'
import Vuex from 'vuex'
import * as authService from './services/auth_service';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: null,
        apiURL: 'http://127.0.0.1:8000/api',
        serverPath: 'http://127.0.0.1:8000',
        user_profile: {}
    },

    mutations: {
        authenticate(state, payload){
            state.isLoggedIn = authService.isLoggedIn();
            if(state.isLoggedIn){
                state.user_profile = payload;
            } else {
                state.user_profile = {};
            }
        }
    },
    actions: {
        authenticate(context, payload) {
            context.commit('authenticate', payload);
        }
    }
})
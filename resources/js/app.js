import VueRouter from "vue-router";
require('./bootstrap');
import Vue from 'vue';
Vue.use(VueRouter);
import App from '../components/App.vue'
const Home = () => import('../components/Home.vue')


 import {routes} from "./routes";
//
// const router = new VueRouter({
//     routes
// })
//Axios import        <h1>Component Principal App.e</h1>

import VueAxios from "vue-axios";
import axios from "axios";

//Importamos e configuramos Vue router
//import router from './routes'
// import VueRouter from "vue-router";
// import {routes} from "./routes";
// import Vue from "vue";
// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);
 const  router = new VueRouter({
     mode: 'history',
     routes
 })

//Criando Instancia de Vue

const app = new Vue ({
    el: '#app',
    router,
    render: h => h(App)
})

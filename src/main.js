import {
    createApp
} from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import Vuelidate from 'vuelidate';
import router from './ router '
// import NavBar from './components/NavBar/NavBar.vue';
// import Home from './components/Home/Home.vue';
// import BasicForm from './components/BasicForm.vue';
const Vue = createApp({});
Vue.use(Vuelidate);
Vue.use(router);
const app = createApp(App);
Vue.use(Vuelidate);
// app.component('friend-contact',FriendContact);
// app.component('home-contact',Home);
// app.component('nav-bar', NavBar);
// app.component('basic-form', BasicForm);
app.mount('#app');
import "bootstrap/dist/js/bootstrap.js";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import {swal} from'sweetalert2';


import './assets/main.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZk07QZP2CFnqE0m6IPcYpQmJa6JYx404",
  authDomain: "xilostats.firebaseapp.com",
  projectId: "xilostats",
  storageBucket: "xilostats.appspot.com",
  messagingSenderId: "464160355794",
  appId: "1:464160355794:web:d7c763279e71300185440b"
};

// Initialize Firebase
const firebaseApp  = initializeApp(firebaseConfig);

const app = createApp(App)
//app.use(swal);
app.use(createPinia())
app.use(router)


app.mount('#app')

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

const config = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: "https://my-project-1561251206802.firebaseio.com",
  projectId: "my-project-1561251206802",
  storageBucket: "my-project-1561251206802.appspot.com",
  messagingSenderId: "468008776710",
  appId: "1:468008776710:web:3bc532e6282d720525bf87"
};

firebase.initializeApp(config);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

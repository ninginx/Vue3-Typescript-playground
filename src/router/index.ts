import firebase from "firebase/app";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeResolve((to, from, next) => {
  if (to.path == "/") {
    next();
  } else {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next();
      } else {
        //未認証時はこちらにリダイレクトする
        next({ path: "/" });
      }
    });
  }
});

export default router;

// src/router.js
import Vue from "vue";
import Router from "vue-router";
import SignUp from "./views/SignUp.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import { auth } from "./firebase";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        { path: "/signup", component: SignUp },
        { path: "/login", component: Login },
        { path: "/home", component: Home, meta: { requiresAuth: true } },
    ],
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = auth.currentUser;

    if (requiresAuth && !isAuthenticated) {
        next("/login");
    } else {
        next();
    }
});

export default router;

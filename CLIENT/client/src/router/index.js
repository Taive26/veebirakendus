import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
        requiresAuth: true
      }
  },
  {
    path: "/home/products",
    name: "products",
    component: () => import("../views/products.vue"),
  },
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem("jwt") == null) {
        next({
          path: "/"
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });
export default router;
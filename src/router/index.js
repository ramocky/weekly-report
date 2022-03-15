import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/login/Login.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/main/Main.vue"),
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401.vue"),
    hidden: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

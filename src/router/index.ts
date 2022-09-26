import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Checkout from "../views/Checkout.vue";

const routes = [
  { path: "/", component: Home, meta: { canOpenSidebar : true } },
  { path: "/checkout", component: Checkout, meta: { canOpenSidebar : false } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

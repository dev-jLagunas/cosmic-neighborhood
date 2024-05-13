import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MercuryView from "../views/MercuryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mercury",
      name: "mecury",
      component: MercuryView,
    },
  ],
});

export default router;

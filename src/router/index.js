import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MercuryView from "../views/MercuryView.vue";
import VenusView from "@/views/VenusView.vue";
import EarthView from "@/views/EarthView.vue";
import MarsView from "@/views/MarsView.vue";
import JupiterView from "@/views/JupiterView.vue";
import SaturnView from "@/views/SaturnView.vue";
import UranusView from "@/views/UranusView.vue";
import NeptuneVue from "@/views/NeptuneView.vue";

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
    {
      path: "/venus",
      name: "venus",
      component: VenusView,
    },
    {
      path: "/earth",
      name: "earth",
      component: EarthView,
    },
    {
      path: "/mars",
      name: "mars",
      component: MarsView,
    },
    {
      path: "/jupiter",
      name: "jupiter",
      component: JupiterView,
    },
    {
      path: "/saturn",
      name: "saturn",
      component: SaturnView,
    },
    {
      path: "/uranus",
      name: "uranus",
      component: UranusView,
    },
    {
      path: "/neptune",
      name: "neptune",
      component: NeptuneVue,
    },
  ],
});

export default router;

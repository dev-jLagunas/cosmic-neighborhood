import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const MercuryView = () => import("@/views/MercuryView.vue");
const VenusView = () => import("@/views/VenusView.vue");
const EarthView = () => import("@/views/EarthView.vue");
const MarsView = () => import("@/views/MarsView.vue");
const JupiterView = () => import("@/views/JupiterView.vue");
const SaturnView = () => import("@/views/SaturnView.vue");
const UranusView = () => import("@/views/UranusView.vue");
const NeptuneView = () => import("@/views/NeptuneView.vue");

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mercury",
      name: "mercury",
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
      component: NeptuneView,
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/",
    },
  ],
});

export default router;

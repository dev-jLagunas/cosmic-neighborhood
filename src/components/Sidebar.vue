<script setup>
import { defineEmits } from "vue";
import { useRouter } from "vue-router";
import { useAnimationStore } from "@/stores/animationStore";
import PlanetLink from "../components/PlanetLink.vue";

const planetImages = {
  mercury: () => import("@/assets/planets/planet-mercury.svg"),
  venus: () => import("@/assets/planets/planet-venus.svg"),
  earth: () => import("@/assets/planets/planet-earth.svg"),
  mars: () => import("@/assets/planets/planet-mars.svg"),
  jupiter: () => import("@/assets/planets/planet-jupiter.svg"),
  saturn: () => import("@/assets/planets/planet-saturn.svg"),
  uranus: () => import("@/assets/planets/planet-uranus.svg"),
  neptune: () => import("@/assets/planets/planet-neptune.svg"),
};

// Store
const { triggerAnimation } = useAnimationStore();

// Emits
const emit = defineEmits(["closeSidebar"]);

// Router
const router = useRouter();
const navigate = async (to) => {
  emit("closeSidebar");
  if (router.currentRoute.value.name === "home") {
    await triggerAnimation();
  }
  router.push(to);
};
</script>

<template>
  <nav class="mt-60 overflow-x-hidden overflow-y-visible z-50">
    <ul class="flex flex-col text-slate-200">
      <PlanetLink
        :imgSrc="planetImages.mercury"
        name="Mercury"
        class="planet-link hover:bg-slate-800 bg-opacity-45 duration-500"
        style="animation-delay: 0s"
        @click="navigate('/mercury')"
      />
      <PlanetLink
        :imgSrc="planetImages.venus"
        name="Venus"
        class="planet-link hover:bg-slate-800 bg-opacity-45 duration-500"
        style="animation-delay: 0.1s"
        @click="navigate('/venus')"
      />
      <PlanetLink
        :imgSrc="planetImages.earth"
        name="Earth"
        class="planet-link hover:bg-slate-800 bg-opacity-45 duration-500"
        style="animation-delay: 0.2s"
        @click="navigate('/earth')"
      />
      <PlanetLink
        :imgSrc="planetImages.mars"
        name="Mars"
        class="planet-link hover:bg-slate-800 bg-opacity-45 duration-500"
        style="animation-delay: 0.3s"
        @click="navigate('/mars')"
      />
      <PlanetLink
        :imgSrc="planetImages.jupiter"
        name="Jupiter"
        class="planet-link hover:bg-slate-800 bg-opacity-45 duration-500"
        style="animation-delay: 0.4s"
        @click="navigate('/jupiter')"
      />
      <PlanetLink
        :imgSrc="planetImages.saturn"
        name="Saturn"
        class="planet-link hover:bg-slate-800 bg-opacity-45 duration-500"
        style="animation-delay: 0.5s"
        @click="navigate('/saturn')"
      />
      <PlanetLink
        :imgSrc="planetImages.uranus"
        name="Uranus"
        class="planet-link hover:bg-slate-800 bg-opacity-45 duration-500"
        style="animation-delay: 0.6s"
        @click="navigate('/uranus')"
      />
      <PlanetLink
        :imgSrc="planetImages.neptune"
        name="Neptune"
        class="planet-link hover:bg-slate-800 bg-opacity-45 duration-500"
        style="animation-delay: 0.7s"
        @click="navigate('/neptune')"
      />
    </ul>
  </nav>
</template>

<style scoped>
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.planet-link {
  animation: slideInFromRight 0.5s ease forwards;
  cursor: pointer;
}
</style>

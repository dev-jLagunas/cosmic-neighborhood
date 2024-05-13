<script setup>
import { defineEmits } from "vue";
import { useRouter } from "vue-router";
import { useAnimationStore } from "@/stores/animationStore";
import PlanetLink from "../components/PlanetLink.vue";
import mercury from "@/assets/planets/planet-mercury.svg";
import venus from "@/assets/planets/planet-venus.svg";
import earth from "@/assets/planets/planet-earth.svg";
import mars from "@/assets/planets/planet-mars.svg";
import jupiter from "@/assets/planets/planet-jupiter.svg";
import saturn from "@/assets/planets/planet-saturn.svg";
import uranus from "@/assets/planets/planet-uranus.svg";
import neptune from "@/assets/planets/planet-neptune.svg";

// store
const { triggerAnimation } = useAnimationStore();

// Emits
const emit = defineEmits(["closeSidebar"]);

// Router
const router = useRouter();
const navigate = async (to) => {
  emit("closeSidebar");
  await triggerAnimation();
  router.push(to);
};
</script>

<template>
  <nav class="mt-60 overflow-x-hidden overflow-y-visible">
    <ul class="flex flex-col gap-4 text-slate-200 pt-8">
      <PlanetLink
        :imgSrc="mercury"
        name="Mercury"
        class="planet-link"
        style="animation-delay: 0s"
        @click="navigate('/mercury')"
      />
      <PlanetLink
        :imgSrc="venus"
        name="Venus"
        class="planet-link"
        style="animation-delay: 0.1s"
        @click="navigate('/venus')"
      />
      <PlanetLink
        :imgSrc="earth"
        name="Earth"
        class="planet-link"
        style="animation-delay: 0.2s"
        @click="navigate('/earth')"
      />
      <PlanetLink
        :imgSrc="mars"
        name="Mars"
        class="planet-link"
        style="animation-delay: 0.3s"
        @click="navigate('/mars')"
      />
      <PlanetLink
        :imgSrc="jupiter"
        name="Jupiter"
        class="planet-link"
        style="animation-delay: 0.4s"
        @click="navigate('/jupiter')"
      />
      <PlanetLink
        :imgSrc="saturn"
        name="Saturn"
        class="planet-link"
        style="animation-delay: 0.5s"
        @click="navigate('/saturn')"
      />
      <PlanetLink
        :imgSrc="uranus"
        name="Uranus"
        class="planet-link"
        style="animation-delay: 0.6s"
        @click="navigate('/uranus')"
      />
      <PlanetLink
        :imgSrc="neptune"
        name="Neptune"
        class="planet-link"
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

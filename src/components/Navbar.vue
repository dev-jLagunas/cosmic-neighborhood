<script setup>
import { useAnimationStore } from "@/stores/animationStore";
import { useRouter } from "vue-router";

// Store
const { triggerAnimation } = useAnimationStore();

// Router
const router = useRouter();
const navigate = async (to) => {
  if (router.currentRoute.value.name === "home") {
    await triggerAnimation();
  }

  router.push(to);
};
</script>

<template>
  <nav class="border-b w-full py-4">
    <ul class="flex justify-evenly text-slate-200">
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <a @click="navigate('/mercury')">MERCURY</a>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <a @click="navigate('/venus')">VENUS</a>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <a @click="navigate('/earth')">EARTH</a>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <a @click="navigate('/mars')">MARS</a>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <a @click="navigate('/jupiter')">JUPITER</a>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <a @click="navigate('/saturn')">SATURN</a>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <a @click="navigate('/uranus')">URANUS</a>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <a @click="navigate('/neptune')">NEPTUNE</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>

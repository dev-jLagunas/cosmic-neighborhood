<script setup>
import { useAnimationStore } from "@/stores/animationStore";
import { useRouter } from "vue-router";

// Store
const { triggerAnimation } = useAnimationStore();

// Router
const router = useRouter();
const navigate = async (to) => {
  await triggerAnimation();
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
        VENUS
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        EARTH
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        MARS
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        JUPITER
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        SATURN
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        URANUS
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>

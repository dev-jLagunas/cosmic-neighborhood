<script setup>
import { useAnimationStore } from "@/stores/animationStore";
import { useRouter } from "vue-router";

// Store
const { triggerAnimation } = useAnimationStore();

// Router
const router = useRouter();
const navigate = async (to) => {
  try {
    if (router.currentRoute.value.name === "home") {
      await triggerAnimation();
    }
    await router.push(to);
  } catch (error) {
    console.error("Navigation error:", error);
  }
};
</script>

<template>
  <nav class="border-b w-full py-4">
    <ul class="flex justify-evenly text-slate-200">
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <button @click="navigate('/mercury')" aria-label="Navigate to Mercury">
          MERCURY
        </button>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <button @click="navigate('/venus')" aria-label="Navigate to Venus">
          VENUS
        </button>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <button @click="navigate('/earth')" aria-label="Navigate to Earth">
          EARTH
        </button>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <button @click="navigate('/mars')" aria-label="Navigate to Mars">
          MARS
        </button>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <button @click="navigate('/jupiter')" aria-label="Navigate to Jupiter">
          JUPITER
        </button>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <button @click="navigate('/saturn')" aria-label="Navigate to Saturn">
          SATURN
        </button>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <button @click="navigate('/uranus')" aria-label="Navigate to Uranus">
          URANUS
        </button>
      </li>
      <li class="hover:scale-125 duration-500 ease-in-out cursor-pointer">
        <button @click="navigate('/neptune')" aria-label="Navigate to Neptune">
          NEPTUNE
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import logo from "@/assets/logo/spacelogo.png";

// State
const toggleSidebar = ref(false);
</script>

<template>
  <header class="text-center md:border-b">
    <img :src="logo" alt="space logo" class="w-32 mx-auto" />
    <h1 class="text-3xl text-center tracking-widest text-slate-50 mb-4">
      OUR COSMIC NEIGHBORHOOD
    </h1>
    <button
      @click="toggleSidebar = !toggleSidebar"
      class="text-white md:hidden duration-500 hover:scale-125"
    >
      <i
        :class="
          toggleSidebar
            ? 'fa-solid fa-times text-2xl'
            : 'fa-solid fa-bars text-2xl'
        "
      ></i>
    </button>
  </header>
  <Navbar class="hidden md:block" />
  <transition name="fade">
    <Sidebar
      class="block fixed inset-0 bg-space-color bg-opacity-90 md:hidden"
      v-if="toggleSidebar"
    />
  </transition>
  <RouterView />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease, transform 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>

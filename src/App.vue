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
    <img :src="logo" alt="space logo" class="w-40 mx-auto" />
    <h1 class="text-3xl text-center tracking-widest text-slate-50 mb-4">
      OUR COSMIC NEIGHBORHOOD
    </h1>
    <button
      @click="toggleSidebar = !toggleSidebar"
      class="text-white md:hidden"
    >
      <i class="fa-solid fa-bars text-2xl"></i>
    </button>
  </header>
  <Navbar class="hidden md:block" />
  <Sidebar
    class="block fixed inset-0 bg-space-color bg-opacity-75 md:hidden"
    v-if="toggleSidebar"
  />
  <RouterView />
</template>

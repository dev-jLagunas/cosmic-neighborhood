<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Props
const props = defineProps({
  imgSrc: String,
  name: String,
  route: String,
});

// Router
const router = useRouter();
const navigate = () => {
  router.push(route.value);
};
</script>
<template>
  <li
    class="border-b border-b-slate-700 tracking-widest flex justify-between items-center text-lg pb-2"
    @click="navigate"
  >
    <span class="flex items-center">
      <img :src="imgSrc" :alt="name" class="h-5 px-5" />
      {{ name }} </span
    ><i class="fa-solid fa-chevron-right pr-8"></i>
  </li>
</template>

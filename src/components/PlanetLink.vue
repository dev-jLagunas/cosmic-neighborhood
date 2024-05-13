<script setup>
// Props
const props = defineProps({
  imgSrc: String,
  name: String,
});
</script>
<template>
  <li
    class="border-b border-b-slate-700 tracking-widest flex justify-between items-center text-lg pb-2"
  >
    <span class="flex items-center">
      <img :src="imgSrc" :alt="name" class="h-5 px-5" />
      {{ name }} </span
    ><i class="fa-solid fa-chevron-right pr-8"></i>
  </li>
</template>

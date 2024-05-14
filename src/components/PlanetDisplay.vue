<script setup>
import { ref } from "vue";

// Props
const props = defineProps({
  tabs: Array,
  planetData: Object,
});

const activeTab = ref(props.tabs[0].id);
</script>

<template>
  <article class="font-league-spartan relative lg:my-28">
    <div
      class="border-b border-t border-b-slate-700 border-t-slate-700 py-4 flex justify-evenly items-center mt-4 md:absolute md:flex-col md:gap-3 md:border-b-0 md:border-t-0 md:bottom-28 md:right-10 lg:left-96"
    >
      <button
        v-for="tab in props.tabs"
        :key="tab.id"
        class="text-xl md:text-base md:border md:border-slate-700 md:px-4 md:py-2 md:w-72 md:hover:bg-slate-500 md:hover:bg-opacity-50 duration-300"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </button>
    </div>
    <div
      class="flex flex-col items-center justify-center md:w-1000 md:pl-3 md:mx-auto lg:flex-none lg:grid lg:grid-cols-1"
    >
      <div
        v-for="tab in props.tabs"
        :key="tab.id"
        class="text-center md:text-start lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center"
        :class="{ active: activeTab === tab.id }"
        v-show="activeTab === tab.id"
      >
        <img
          :src="tab.img"
          alt=""
          class="mx-auto h-20 my-8 md:h-44 lg:h-80 lg:row-span-2"
        />
        <div
          class="px-4 flex flex-col w-90vw md:w-1/2 md:px-0 lg:w-full lg:pl-6"
        >
          <h1 class="text-4xl font-antonio">{{ tab.planet }}</h1>
          <h4 class="text-slate-400 tracking-widest">{{ tab.name }}</h4>
          <p class="py-4">{{ tab.content }}</p>
          <p>
            <span class="text-slate-400 pr-2 tracking-widest">Source:</span
            >Wikipedia
            <a :href="tab.source" target="_blank">
              <i class="fa-solid fa-link font-xs pl-2"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 my-2 md:flex-row md:w-90vw md:mx-auto md:justify-center md:items-center md:mt-4"
    >
      <ul v-for="(value, key, index) in planetData" :key="index">
        <li
          class="text-2xl border border-slate-700 w-90vw mx-auto px-4 py-2 flex justify-between items-center md:flex-col md:w-44 md:items-start"
        >
          <span class="text-base text-slate-500">{{ key }}</span> {{ value }}
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped></style>

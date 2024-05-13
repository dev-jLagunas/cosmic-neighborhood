<script setup>
import { ref } from "vue";
import mercury from "@/assets/planets/planet-mercury.svg";
import mercuryInternal from "@/assets/planets/planet-mercury-internal.svg";
import mercuryGeology from "@/assets/planets/geology-mercury.png";

// Define the tabs
const tabs = [
  {
    id: "overview",
    name: "Overview",
    content:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    img: mercury,
  },
  {
    id: "structure",
    name: "Structure",
    content:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
    img: mercuryInternal,
  },
  {
    id: "geology",
    name: "Geology",
    content:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
    img: mercury,
  },
];

// Define the active tab
const activeTab = ref(tabs[0].id);
</script>

<template>
  <article class="font-league-spartan relative lg:mt-28">
    <div
      class="border-b border-t border-b-slate-700 border-t-slate-700 py-4 flex justify-evenly items-center mt-4 md:absolute md:flex-col md:gap-3 md:border-b-0 md:border-t-0 md:bottom-32 md:right-20 lg:left-96"
    >
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="text-xl md:text-base md:border md:border-slate-700 md:px-4 md:py-2 md:w-72 md:hover:bg-slate-500 md:hover:bg-opacity-50 duration-300"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </button>
    </div>
    <div
      class="flex flex-col items-center justify-center md:w-90vw md:mx-auto lg:flex-none lg:grid lg:grid-cols-1 lg:w-2/3"
    >
      <div
        v-for="tab in tabs"
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
          class="px-4 flex flex-col w-90vw md:w-1/2 md:px-0 lg:w-full lg:pl-2"
        >
          <h1 class="text-4xl font-antonio">MERCURY</h1>
          <h4 class="text-slate-400 tracking-widest">{{ tab.name }}</h4>
          <p class="py-4">{{ tab.content }}</p>
          <p>
            <span class="text-slate-400 pr-2 tracking-widest">Source:</span
            >Wikipedia
          </p>
        </div>
      </div>
    </div>
    <ul
      class="flex flex-col gap-2 items-center my-8 md:flex-row md:w-90vw md:mx-auto"
    >
      <li
        class="border border-slate-700 px-5 py-3 w-90vw flex justify-between items-center text-xl md:flex-col"
      >
        <span class="text-base text-slate-500">Rotation Time</span>58.6 days
      </li>
      <li
        class="border border-slate-700 px-5 py-3 w-90vw flex justify-between items-center text-xl md:flex-col"
      >
        <span class="text-base text-slate-500">Rotation Time</span>58.6 days
      </li>
      <li
        class="border border-slate-700 px-5 py-3 w-90vw flex justify-between items-center text-xl md:flex-col"
      >
        <span class="text-base text-slate-500">Rotation Time</span>58.6 days
      </li>
      <li
        class="border border-slate-700 px-5 py-3 w-90vw flex justify-between items-center text-xl md:flex-col"
      >
        <span class="text-base text-slate-500">Rotation Time</span>58.6 days
      </li>
    </ul>
  </article>
</template>

<style scoped></style>

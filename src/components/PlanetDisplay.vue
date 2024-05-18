<script setup>
import { ref, computed } from "vue";
import Planet3DModel from "./Planet3DModel.vue";

// Props
const props = defineProps({
  tabs: Array,
  planetData: Object,
  planetSkin: String,
});

// State
const animate = ref(false);

const activeTab = ref(props.tabs[0].id);
const activeTabContent = computed(() => {
  return props.tabs.filter((tab) => tab.id === activeTab.value);
});

let show3dModel = ref(false);

// Method
const changeTab = (id) => {
  activeTab.value = id;
  animate.value = true;
};

const open3DModel = () => {
  show3dModel.value = true;
};

const close3Dmodel = () => {
  show3dModel.value = false;
};
</script>

<template>
  <article class="font-league-spartan relative lg:my-28">
    <div
      class="border-b border-t border-b-slate-700 border-t-slate-700 py-4 flex justify-evenly items-center mt-4 md:absolute md:flex-col md:gap-3 md:border-b-0 md:border-t-0 md:bottom-40 md:right-10 lg:left-96"
    >
      <button
        v-for="tab in props.tabs"
        :key="tab.id"
        class="text-xl hover:scale-110 md:text-base md:border md:border-slate-700 md:px-4 md:py-2 md:w-72 md:hover:bg-slate-500 md:hover:bg-opacity-50 duration-300"
        :class="{ active: activeTab === tab.id }"
        @click="changeTab(tab.id)"
      >
        {{ tab.name }}
      </button>
    </div>
    <div
      class="flex flex-col items-center justify-center md:w-1000 md:pl-3 md:mx-auto lg:flex-none lg:grid lg:grid-cols-1"
    >
      <div
        v-for="tab in activeTabContent"
        :key="tab.id"
        class="text-center md:text-start lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center lg:h-96"
        :class="{ active: activeTab === tab.id }"
      >
        <figure class="relative lg:mt-40">
          <img
            :src="tab.img"
            alt="planet images"
            :class="{ 'roll-in-blurred-left': animate }"
            class="mx-auto h-20 my-8 md:h-44 lg:h-80 lg:row-span-2"
            @animationend="animate = false"
          />
          <img
            v-if="tab.id === 'geology'"
            :src="tab.imgGeo"
            alt="planet geology pointer"
            class="absolute top-8 left-60 h-20 -rotate-45 md:left-96 md:h-30 md:top-20 lg:left-44 lg:top-44 lg:h-40"
          />
        </figure>

        <div
          class="px-4 flex flex-col w-90vw md:w-1/2 md:px-0 lg:w-full lg:pl-6"
        >
          <h1 class="text-4xl font-antonio">{{ tab.planet }}</h1>
          <h4 class="text-slate-400 tracking-widest">{{ tab.name }}</h4>
          <p
            :class="{ 'fade-in-fwd': animate }"
            class="py-4 md:h-40"
            @animationend="animate = false"
          >
            {{ tab.content }}
          </p>
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
      class="flex flex-col gap-2 my-6 md:flex-row md:w-90vw md:mx-auto md:justify-center md:items-center md:mt-4"
    >
      <ul v-for="(value, key, index) in planetData" :key="index">
        <li
          class="text-2xl border border-slate-700 w-90vw mx-auto px-4 py-2 flex justify-between items-center md:flex-col md:w-44 md:items-start"
        >
          <span class="text-base text-slate-500">{{ key }}</span> {{ value }}
        </li>
      </ul>
    </div>
    <div
      class="w-90vw mx-auto my-4 hover:bg-slate-500 hover:bg-opacity-50 duration-300 md:w-1/2 lg:w-2/3 2xl:w-1/3"
    >
      <button
        class="text-xl border border-slate-700 px-4 py-2 w-full text-slate-300"
        @click="open3DModel"
      >
        See 3D Model
      </button>
    </div>
  </article>
  <section v-if="show3dModel" class="fixed inset-0">
    <planet-3-d-model :planetSkin="planetSkin"></planet-3-d-model>
    <h1
      class="text-4xl text-slate-300 absolute bottom-40 left-10 font-bold tracking-widest"
    >
      {{ props.tabs[0].planet }}
    </h1>
    <p
      class="text-sm text-slate-300 absolute bottom-32 left-10 font-bold tracking-widest"
    >
      INTERACT WITH ME
    </p>
    <button
      class="text-4xl text-slate-300 absolute top-10 left-10 font-bold"
      @click="close3Dmodel"
    >
      X
    </button>
  </section>
</template>

<style scoped>
@keyframes roll-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1000px) rotate(-720deg);
    transform: translateX(-1000px) rotate(-720deg);
    -webkit-filter: blur(50px);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}

.roll-in-blurred-left {
  -webkit-animation: roll-in-blurred-left 2s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation: roll-in-blurred-left 2s cubic-bezier(0.23, 1, 0.32, 1) both;
}

@keyframes fade-in-fwd {
  0% {
    -webkit-transform: translateZ(-80px);
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}

.fade-in-fwd {
  -webkit-animation: fade-in-fwd 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-fwd 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-5-14 13:10:5
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * --------------------------------------------------------
 * animation fade-in-fwd + animation roll-in-blurred-left
 * --------------------------------------------------------
 */
</style>

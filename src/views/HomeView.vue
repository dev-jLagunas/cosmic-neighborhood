<script setup>
import { ref } from "vue";
import astronautFront from "@/assets/astronaut/astronaut-front.png";
import astronautSide from "@/assets/astronaut/astronaut-side.png";
import astronautBack1 from "@/assets/astronaut/astronaut-back1.png";
import astronautBack2 from "@/assets/astronaut/astronaut-back2.png";
import astronautBack3 from "@/assets/astronaut/astronaut-back3.png";
import astronautBack4 from "@/assets/astronaut/astronaut-back4.png";
import astronautBack5 from "@/assets/astronaut/astronaut-back5.png";
import astronautBack6 from "@/assets/astronaut/astronaut-back6.png";

const currentIndex = ref(0);
const images = [
  astronautFront,
  astronautSide,
  astronautBack1,
  astronautBack2,
  astronautBack3,
  astronautBack4,
  astronautBack5,
  astronautBack6,
];

const intervalRef = ref(null);

const startAnimation = () => {
  if (intervalRef.value !== null) return;
  intervalRef.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
    if (currentIndex.value === 0) {
      clearInterval(intervalRef.value);
      intervalRef.value = null;
    }
  }, 1100);
};
</script>

<template>
  <section class="">
    <div class="relative -z-10 floating">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        alt="astronaut images"
        :class="{
          active: index === currentIndex,
          'final-animate': index === 7 && index === currentIndex,
        }"
        :data-index="index"
      />
    </div>
  </section>
  <div class="absolute bottom-10 right-10">
    <button
      @click="startAnimation"
      class="border hover:cursor-pointer p-4 rounded-md"
    >
      Howdy partner!
    </button>
  </div>
</template>

<style scoped>
img {
  position: absolute;
  opacity: 0;
  transition: opacity 0.6s ease;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 10%);
}
img.active {
  opacity: 1;
}

img[data-index="1"] {
  transform: translate(-50%, -20%);
}

img[data-index="2"] {
  transform: translate(-50%, -20%);
}

img[data-index="3"] {
  transform: translate(-50%, -27%);
}

img[data-index="4"] {
  transform: translate(-50%, -30%);
}

img[data-index="5"] {
  transform: translate(-50%, -30%);
}

img[data-index="6"] {
  transform: translate(-50%, -30%);
}

img.final-animate {
  animation: scaleDownDisappear 6s ease forwards;
}

.floating {
  animation-name: floating;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 60px);
  }
  to {
    transform: translate(0, -0px);
  }
}

@keyframes scaleDownDisappear {
  from {
    opacity: 0.5;
    transform: translate(-50%, -30%) scale(0.5);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -30%) scale(0);
    display: none;
  }
}
</style>

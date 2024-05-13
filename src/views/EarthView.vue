<script setup>
import PlanetDisplay from "@/components/PlanetDisplay.vue";
import usePlanetData from "@/composables/usePlanetData";

const { data, error } = usePlanetData("Earth");
</script>

<template>
  <section>
    <PlanetDisplay v-if="!error" :planet-data="data" />
    <p v-if="error">Error loading data</p>
  </section>
</template>

<style scoped></style>

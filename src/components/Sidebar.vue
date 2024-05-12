<script setup>
import { ref } from "vue";
import logo from "@/assets/logo/spacelogo.png";
import PlanetLink from "../components/PlanetLink.vue";
import mercury from "@/assets/planets/planet-mercury.svg";
import venus from "@/assets/planets/planet-venus.svg";
import earth from "@/assets/planets/planet-earth.svg";
import mars from "@/assets/planets/planet-mars.svg";
import jupiter from "@/assets/planets/planet-jupiter.svg";
import saturn from "@/assets/planets/planet-saturn.svg";
import uranus from "@/assets/planets/planet-uranus.svg";
import neptune from "@/assets/planets/planet-neptune.svg";
</script>

<template>
  <nav class="mt-60 overflow-x-hidden overflow-y-visible">
    <ul class="flex flex-col gap-4 text-slate-200 pt-8">
      <PlanetLink :imgSrc="mercury" name="Mercury" />
      <PlanetLink :imgSrc="venus" name="Venus" />
      <PlanetLink :imgSrc="earth" name="Earth" />
      <PlanetLink :imgSrc="mars" name="Mars" />
      <PlanetLink :imgSrc="jupiter" name="Jupiter" />
      <PlanetLink :imgSrc="saturn" name="Saturn" />
      <PlanetLink :imgSrc="uranus" name="Uranus" />
      <PlanetLink :imgSrc="neptune" name="Neptune" />
    </ul>
  </nav>
</template>

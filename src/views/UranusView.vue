<script setup>
import PlanetDisplay from "@/components/PlanetDisplay.vue";
import uranus from "@/assets/planets/planet-uranus.svg";
import uranusInternal from "@/assets/planets/planet-uranus-internal.svg";
import uranusGeology from "@/assets/planets/geology-uranus.png";

const tabs = [
  {
    id: "overview",
    planet: "Uranus",
    name: "Overview",
    content:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    source: "https://en.wikipedia.org/wiki/Uranus",
    img: uranus,
  },
  {
    id: "structure",
    planet: "Uranus",
    name: "Structure",
    content:
      "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    source: "https://en.wikipedia.org/wiki/Uranus#Internal_structure",
    img: uranusInternal,
  },
  {
    id: "geology",
    planet: "Uranus",
    name: "Geology",
    content:
      "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    source: "https://en.wikipedia.org/wiki/Uranus#Atmosphere",
    img: uranus,
    imgGeo: uranusGeology,
  },
];

const planetData = {
  rotation: "17.2 Hours",
  revolution: "84 Years",
  radius: "25,362 KM",
  temperature: "-195°c",
};

const planetSkin = "3d-skins/uranus-skin.jpg";
</script>

<template>
  <section>
    <PlanetDisplay
      :tabs="tabs"
      :planet-data="planetData"
      :planetSkin="planetSkin"
    />
  </section>
</template>

<style scoped></style>

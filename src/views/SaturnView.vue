<script setup>
import PlanetDisplay from "@/components/PlanetDisplay.vue";
import saturn from "@/assets/planets/planet-saturn.svg";
import saturnInternal from "@/assets/planets/planet-saturn-internal.svg";

const tabs = [
  {
    id: "overview",
    planet: "Saturn",
    name: "Overview",
    content:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    source: "https://en.wikipedia.org/wiki/Saturn",
    img: saturn,
  },
  {
    id: "structure",
    planet: "Saturn",
    name: "Structure",
    content:
      "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    source: "https://en.wikipedia.org/wiki/Saturn#Internal_structure",
    img: saturnInternal,
  },
  {
    id: "geology",
    planet: "Saturn",
    name: "Geology",
    content:
      "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
    source: "https://en.wikipedia.org/wiki/Saturn#Atmosphere",
    img: saturn,
  },
];

const planetData = {
  rotation: "10.8 Hours",
  revolution: "29.46 Years",
  radius: "58,232 KM",
  temperature: "-138°c",
};

const planetSkin = "src/assets/3d-skins/saturn-skin.jpg";
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

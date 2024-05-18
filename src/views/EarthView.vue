<script setup>
import PlanetDisplay from "@/components/PlanetDisplay.vue";
import earth from "@/assets/planets/planet-earth.svg";
import earthInternal from "@/assets/planets/planet-earth-internal.svg";

const tabs = [
  {
    id: "overview",
    planet: "Earth",
    name: "Overview",
    content:
      "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    source: "https://en.wikipedia.org/wiki/Earth",
    img: earth,
  },
  {
    id: "structure",
    planet: "Earth",
    name: "Structure",
    content:
      "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    source: "https://en.wikipedia.org/wiki/Earth#Internal_structure",
    img: earthInternal,
  },
  {
    id: "geology",
    planet: "Earth",
    name: "Geology",
    content:
      "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
    source: "https://en.wikipedia.org/wiki/Earth#Surface",
    img: earth,
  },
];

const planetData = {
  rotation: "0.99 Days",
  revolution: "365.26 Days",
  radius: "6,371 KM",
  temperature: "16°c",
};

const planetSkin = "src/assets/3d-skins/earth-skin.jpg";
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

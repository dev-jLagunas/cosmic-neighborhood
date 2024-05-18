<script setup>
import PlanetDisplay from "@/components/PlanetDisplay.vue";
import earth from "@/assets/planets/planet-mars.svg";
import earthInternal from "@/assets/planets/planet-mars-internal.svg";

const tabs = [
  {
    id: "overview",
    planet: "Mars",
    name: "Overview",
    content:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
    source: "https://en.wikipedia.org/wiki/Mars",
    img: earth,
  },
  {
    id: "structure",
    planet: "Mars",
    name: "Structure",
    content:
      "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
    source: "https://en.wikipedia.org/wiki/Mars#Internal_structure",
    img: earthInternal,
  },
  {
    id: "geology",
    planet: "Mars",
    name: "Geology",
    content:
      "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
    source: "https://en.wikipedia.org/wiki/Mars#Surface_geology",
    img: earth,
  },
];

const planetData = {
  rotation: "1.03 Days",
  revolution: "1.88 Years",
  radius: "3,389.5 KM",
  temperature: "-28°c",
};

const planetSkin = "src/assets/3d-skins/mars-skin.jpg";
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

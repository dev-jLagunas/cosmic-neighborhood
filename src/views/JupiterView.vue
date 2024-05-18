<script setup>
import PlanetDisplay from "@/components/PlanetDisplay.vue";
import jupiter from "@/assets/planets/planet-jupiter.svg";
import jupiterInternal from "@/assets/planets/planet-jupiter-internal.svg";

const tabs = [
  {
    id: "overview",
    planet: "Jupiter",
    name: "Overview",
    content:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    source: "https://en.wikipedia.org/wiki/Jupiter",
    img: jupiter,
  },
  {
    id: "structure",
    planet: "Jupiter",
    name: "Structure",
    content:
      "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    source: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure",
    img: jupiterInternal,
  },
  {
    id: "geology",
    planet: "Jupiter",
    name: "Geology",
    content:
      "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
    source:
      "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices",
    img: jupiter,
  },
];

const planetData = {
  rotation: "9.93 Hours",
  revolution: "11.86 Years",
  radius: "69,911 KM",
  temperature: "-108°c",
};

const planetSkin = "src/assets/3d-skins/jupiter-skin.jpg";
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

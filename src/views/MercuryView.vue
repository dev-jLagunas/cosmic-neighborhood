<script setup>
import PlanetDisplay from "@/components/PlanetDisplay.vue";
import mercury from "@/assets/planets/planet-mercury.svg";
import mercuryInternal from "@/assets/planets/planet-mercury-internal.svg";
// import mercuryGeology from "@/assets/planets/geology-mercury.png";

const tabs = [
  {
    id: "overview",
    planet: "Mercury",
    name: "Overview",
    content:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    img: mercury,
  },
  {
    id: "structure",
    planet: "Mercury",
    name: "Structure",
    content:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
    img: mercuryInternal,
  },
  {
    id: "geology",
    planet: "Mercury",
    name: "Geology",
    content:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
    img: mercury,
  },
];

const planetData = {
  rotation: "58.6 Days",
  revolution: "87.97 Days",
  radius: "2,439.7 KM",
  temperature: "430°c",
};

const planetSkin = "3d-skins/mercury-skin.jpg";
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

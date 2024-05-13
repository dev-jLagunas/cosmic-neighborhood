// usePlanetData.js
import { ref } from "vue";
import planetData from "/data.json";

export default function usePlanetData(planetName) {
  const data = ref(null);
  const error = ref(null);

  try {
    const planet = planetData.find(
      (planet) => planet.name.toLowerCase() === planetName.toLowerCase()
    );
    if (planet) {
      data.value = planet;
    } else {
      throw new Error(`No data found for planet ${planetName}`);
    }
  } catch (err) {
    error.value = err.message;
  }

  return { data, error };
}

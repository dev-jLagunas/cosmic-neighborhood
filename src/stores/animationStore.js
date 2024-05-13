// animationStore.js
import { defineStore } from "pinia";

export const useAnimationStore = defineStore({
  id: "animation",
  state: () => ({
    triggeredByRouting: false,
  }),
  actions: {
    triggerAnimation() {
      this.triggeredByRouting = true;

      return new Promise((resolve) => setTimeout(resolve, 8000)); // wait for 10 seconds
    },
    resetAnimationTrigger() {
      this.triggeredByRouting = false;
    },
  },
});

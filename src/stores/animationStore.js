import { defineStore } from "pinia";

export const useAnimationStore = defineStore("animation", {
  state: () => ({
    triggeredByRouting: false,
  }),
  actions: {
    triggerAnimation() {
      this.triggeredByRouting = true;

      return new Promise((resolve) => setTimeout(resolve, 8000));
    },
    resetAnimationTrigger() {
      this.triggeredByRouting = false;
    },
  },
});

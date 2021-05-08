<template>
  <button @click="open = true">open</button>
  <teleport to="body">
    <div v-if="open">
      <div>
        I'm a teleported modal! (My parent is "body")
        <button @click="open = false">Close</button>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Appson",
  setup() {
    const open = ref(false);
    return {
      open,
    };
  },
});
</script>
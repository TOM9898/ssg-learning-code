<template>
  <ul class="main"></ul>
  <Item />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Item from "./Item.vue";
export default defineComponent({
  name: "List",
  components: {
    Item,
  },
});
</script>
<style scoped>
</style>
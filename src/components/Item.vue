<template>
  <li>
    <label>
      <input type="checkbox" />
      <span>***</span>
    </label>
    <button class="btn" style="display: none">删除</button>
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Item",
});
</script>
<style scoped>
</style>
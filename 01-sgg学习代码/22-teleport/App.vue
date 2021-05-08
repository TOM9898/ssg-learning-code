<template>
  <h2>app fathers components</h2>
  <h2>
    Teleport 提供了一种干净的方法,
    让组件的html在父组件界面外的特定标签(很可能是body)下插入显示
  </h2>
  <hr />
  <Appson />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Appson from "./Appson.vue";
export default defineComponent({
  name: "App",

  components: {
    Appson,
  },
});
</script>
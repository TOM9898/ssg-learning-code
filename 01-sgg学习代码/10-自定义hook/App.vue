<template>
  <h2>自定义hook函数操作</h2>
  <h3>鼠标x轴坐标:{{ x }}</h3>
  <h3>鼠标y轴坐标:{{ y }}</h3>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useMousePosition from "./hooks/useMousePosition";
export default defineComponent({
  name: "App",
  setup() {
    const { x, y } = useMousePosition();
    return {
      x,
      y,
    };
  },
});
</script>
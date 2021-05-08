<template>
  <h2>ref 获取页面中的元素</h2>
  <input type="text" ref="inputRef" />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const inputRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      inputRef.value && inputRef.value.focus();
    });

    return {
      inputRef,
    };
  },
});
</script>
<template>
  <h2>父级组件</h2>
  <h3>msg:{{ msg }}</h3>
  <button @click="msg += '='">更新</button>
  <hr />
  <child :msg="msg" msg1="123" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import child from "./components/child.vue";
export default defineComponent({
  name: "App",
  components: {
    child,
  },
  setup() {
    // 定义一个ref类型的数据
    const msg = ref("look one look");
    return {
      msg,
    };
  },
});
</script>
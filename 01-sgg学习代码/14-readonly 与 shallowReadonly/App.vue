<template>
  <h1>readonly 与 shallowReadonly</h1>
  <h3>some:{{ state }}</h3>
  <h3>some1:{{ state1 }}</h3>
  <button @click="update">change</button>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "andy",
      age: 22,
      friends: {
        name: "lucy",
        age: 23,
      },
    });
    /*
    readonly: 深度只读数据
      获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。
      只读代理是深层的：访问的任何嵌套 property 也是只读的。
    shallowReadonly: 浅只读数据
      创建一个代理，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换 
    应用场景: 
      在某些特定情况下, 我们可能不希望对数据进行更新的操作, 那就可以包装生成一个只读代理对象来读取数据, 而不能修改或删除
    */

    // const state1 = readonly(state);
    const state1 = shallowReadonly(state);

    const update = () => {
      // state1.name += "==";
      state1.friends.name += "==";
    };
    return {
      state,
      state1,
      update,
    };
  },
});
</script>
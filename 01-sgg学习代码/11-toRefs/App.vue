<template>
  <h2>toRefs的使用</h2>
  <h3>{{ state.name }}</h3>
  <h3>{{ state.age }}</h3>
  <hr />
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <hr />
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "App",
  // 把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref

  // 应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用

  // 问题: reactive 对象取出的所有属性值都是非响应式的

  // 解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性
  setup() {
    const state = reactive({
      name: "andy",
      age: 23,
    });
    // 把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
    const state1 = toRefs(state); //{name:'andy',age:23}
    console.log(state1);
    setInterval(() => {
      // state.name += "==";
      state1.name.value += "==";
      console.log("=");
    }, 1000);
    const { foo2, bar2 } = useReatureX();

    return {
      state,
      // ...state, //{name:'andy',age:23}
      ...state1,
      foo2,
      bar2,
    };
    //

    //
    function useReatureX() {
      const state = reactive({
        foo2: "a",
        bar2: "b",
      });

      setTimeout(() => {
        state.foo2 += "++";
        state.bar2 += "++";
      }, 2000);

      return toRefs(state);
    }
  },
});
</script>
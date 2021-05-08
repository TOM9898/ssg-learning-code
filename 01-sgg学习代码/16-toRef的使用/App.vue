<template>
  <h1>toRef</h1>
  <h3>state:{{ state }}</h3>
  <h3>toRefage:{{ age }}</h3>
  <h3>ref:{{ money }}</h3>
  <button @click="update">change</button>
  <hr />
  <child :age="age" />
</template>
<script lang="ts">
import { defineComponent, ref, toRef, reactive } from "vue";
import child from "./components/child.vue";
export default defineComponent({
  name: "App",
  components: {
    child,
  },
  setup() {
    const state = reactive({
      age: 5,
      money: 100,
    });
    // 把响应式的数据state的摸个属性变成了ref对象
    // 和state的数据相通
    const age = toRef(state, "age");
    // 把响应式对象里面的某个属性通过ref进行包装，变成一个ref对象
    // 单独的数据，改变了之后不影响state的数据
    const money = ref(state.money);

    console.log(age);
    console.log(money);

    // 更新数据
    const update = () => {
      // console.log("hello");
      age.value += 1;
      money.value += 10;
    };
    return {
      state,
      age,
      money,
      update,
    };
  },
});
</script>
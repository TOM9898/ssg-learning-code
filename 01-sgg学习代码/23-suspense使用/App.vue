<template>
  <h1>
    Suspense(不确定的)
    它们允许我们的应用程序在等待异步组件时渲染一些后备内容，可以让我们创建一个平滑的用户体验
  </h1>
  <hr />
  <Suspense>
    <template v-slot:default>
      <AsyncComp />
      <!-- <AsyncAddress/> -->
    </template>

    <template v-slot:fallback>
      <h1>LOADING...</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
/* 
异步组件 + Suspense组件
*/
// import AsyncComp from './AsyncComp.vue'
import AsyncAddress from "./AsyncAddress.vue";
import { defineAsyncComponent } from "vue";
const AsyncComp = defineAsyncComponent(() => import("./AsyncComp.vue"));
export default {
  setup() {
    return {};
  },

  components: {
    AsyncComp,
    // AsyncAddress,
  },
};
</script>
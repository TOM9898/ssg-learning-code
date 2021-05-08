<template>
  <h1>setup和ref的基本使用</h1>
  <h2>{{num}}</h2>
  <button @click="dianji">+1</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'App',
  setup(){
    const num=ref(0);
    function dianji(){
      num.value++
    }
    return{
      num,
      dianji
    }
  }
 });
</script>



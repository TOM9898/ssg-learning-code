<template>
  <div class="about">
    <h2>msg: {{ msg }}</h2>
    <hr />
    <button @click="update">更新</button>
  </div>
</template>

<script lang="ts">
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
} from "vue";

export default {
  beforeCreate() {
    console.log("2--beforeCreate");
  },

  created() {
    console.log("2--created");
  },

  beforeMount() {
    console.log("2--beforeMount");
  },

  mounted() {
    console.log("2--mounted");
  },

  beforeUpdate() {
    console.log("2--beforeUpdate");
  },

  updated() {
    console.log("2--updated");
  },

  beforeUnmount() {
    console.log("2--beforeUnmount");
  },

  unmounted() {
    console.log("2--unmounted");
  },

  setup() {
    console.log("3--setup");
    const msg = ref("abc");

    const update = () => {
      msg.value += "--";
    };

    onBeforeMount(() => {
      console.log("3--onBeforeMount");
    });

    onMounted(() => {
      console.log("3--onMounted");
    });

    onBeforeUpdate(() => {
      console.log("3--onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("3--onUpdated");
    });

    onBeforeUnmount(() => {
      console.log("3--onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("3--onUnmounted");
    });

    return {
      msg,
      update,
    };
  },
};
</script>

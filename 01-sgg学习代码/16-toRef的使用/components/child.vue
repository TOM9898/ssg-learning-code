<template>
  <h2>child</h2>
  <h3>age:{{ age }}</h3>
  <h3>length:{{ length }}</h3>
</template>
<script lang="ts">
import { defineComponent, computed, Ref, toRef } from "vue";
function qqqq(age: Ref) {
  return computed(() => {
    return age.value.toString().length;
  });
}
export default defineComponent({
  name: "child",
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const length = qqqq(toRef(props, "age"));
    return {
      length,
    };
  },
});
</script>
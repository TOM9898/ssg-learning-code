<template>
  <div></div>
  <Header />
  <List />
  <Footer />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default defineComponent({
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
});
</script>
<style scoped>
</style>
<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue"
</script>

<template>
  <AppHeader/>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
.ql-container.ql-snow {
  border: none !important;
  height: 15rem;
}
.ql-container{
  font-family: "Nunito Sans", sans-serif !important;
  font-size: 1.4rem;
  color: var(--color-text);
}
</style>

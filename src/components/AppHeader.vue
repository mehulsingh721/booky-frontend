<script setup>
import { store } from "../store.js"
import axios from "axios";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";

const getUserData = () => {
  axios.get("/api/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      Accept: "application/json"
    },
    params: {
      userId: localStorage.getItem("user_id")
    }
  }).then((res) => {
    store.updateData(res.data.fullName, res.data.username)
  })
}

onMounted(() => {
  getUserData()
})
</script>

<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <img class="logo" src="../assets/logo.png" alt="app-logo">
      <ul class="app-header__nav--links">
        <li class="link"><RouterLink to="/">Home</RouterLink></li>
        <li class="link"><RouterLink to="/availability">Availability</RouterLink></li>
        <li class="link"><RouterLink to="/integrations">Integrations</RouterLink></li>
        <li class="link">Help</li>
        <li class="link">Account</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.app-header{
  width: 100%;
  background-color: var(--color-body);
  border-bottom: 1px solid var(--color-border);
  &__nav{
    display: flex;
    width: 55%;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 2rem 2rem;
    .logo{
      width: 35px;
      height: 35px;
    }
    &--links{
      display: flex;
      column-gap: 2rem;
      list-style: none;
    }
  }
}
</style>

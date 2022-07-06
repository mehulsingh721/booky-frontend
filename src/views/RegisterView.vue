<template>
  <div class="register">
    <div class="form">
      <input type="text" v-model="username" placeholder="Username">
      <input type="text" v-model="fullName" placeholder="Full Name">
      <input type="email" v-model="email" placeholder="Email Address">
      <input type="password" v-model="password" placeholder="Password">
      <button class="btn" @click="register">Register</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import axios from "axios"

export default {
  name: "RegisterView",
  setup() {
    const username = ref("");
    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    const register = () => {
      const data = {
        username: username.value,
        fullName: fullName.value,
        email: email.value,
        password: password.value
      }
      axios.post("/api/register", data).then((res) => {
        localStorage.setItem("auth-token", res.data.access_token)
      })
    }

    return { username, fullName, email, password, register }
  }
}
</script>

<style scoped lang="scss">

.register {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .form {
    width: 20%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    input{
      padding: 1rem;
      border: 1px solid var(--color-secondary);
      border-radius: 6px;
      background-color: transparent;
    }
    button {
      width: 100%;
      margin-top: 1rem;
    }
  }
}
</style>

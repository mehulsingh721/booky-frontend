<template>
  <div class="login">
    <div class="form">
      <input type="email" v-model="email" placeholder="Email Address">
      <input type="password" v-model="password" placeholder="Password">
      <button class="btn" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "LoginView",
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const login = () => {
      const data = {
        email: email.value,
        password: password.value
      }
      axios.post("/api/login", data, {
          headers: {
            Accept: "application/json"
          }
        }).then((res) => {
          console.log(res)
          localStorage.setItem("auth-token", res.data.access_token)
          localStorage.setItem("user_id", res.data.user_id)

          router.push({
            name: "home",
            query: {
              ...router.query
            }
          })
        })
    }

    return { email, password, login }
  }
}
</script>

<style scoped lang="scss">
.login {
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

    input {
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

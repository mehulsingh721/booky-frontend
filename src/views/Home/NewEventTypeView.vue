<script>
import { useRouter } from "vue-router";

export default {
  name: "NewEventTypeView",
  setup() {
    const router = useRouter();
    const toSolo = () => {
      router.push({
        name: "soloEvent",
        query: {
          ...router.query
        }
      })
    }
    return { toSolo };
  }
}
</script>

<template>
  <div class="types-bar">
    <div class="container">
      <div class="wrapper">
        <button class="btn-sec">Back</button>
        <h1>Create New Event Type</h1>
      </div>
    </div>
  </div>
  <div class="types-content">
    <div class="types-content__container">
      <div class="name">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-user" />
        </div>
        <div>
          <h2>One-on-One</h2>
          <p>Let an invitee pick a time to meet with you.</p>
        </div>
      </div>
      <button class="btn" @click="toSolo">Create</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.types-bar {
  background-color: var(--color-body);
  padding-top: 2rem;
  box-shadow: 0 20px 20px -20px rgba(0, 0, 0, .15);

  .container {
    padding: 2rem 2rem;
    max-width: 55%;
    margin: auto;
    width: 100%;
    margin-bottom: 4rem;

    .wrapper {
      display: flex;
      max-width: 60%;
      justify-content: space-between;

      h1 {
        font-size: 2rem;
        font-weight: 400;
        color: var(--color-text);
      }
    }
  }
}

.types-content {
  padding: 0 2rem;
  max-width: 55%;
  margin: auto;
  width: 100%;
  display: grid;
  grid-gap: 2rem;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .name {
      display: flex;
      align-items: center;
      column-gap: 3rem;

      h2 {
        font-size: 1.8rem;
        font-weight: 400;
        color: var(--color-text);
        line-height: 27px;
      }

      p {
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--color-text);
        line-height: 24px;
      }

      svg {
        background-color: #e9e1fa;
        color: #8247f5;
        border-radius: 1rem;
        padding: 2rem;
        width: 3rem;
        height: 3rem;
      }
    }
  }
}
</style>

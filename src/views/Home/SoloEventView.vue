<script>
import ToggleSwitch from "../../components/ToggleSwitch.vue";
import CustomQuill from "../../components/CustomQuill.vue";
import {ref} from "vue";
export default {
  name: "SoloEventView",
  components: {
    ToggleSwitch,
    CustomQuill
  },
  setup() {
    const eventStatus = ref(false);
    const toggleEventStatus = () => {
      eventStatus.value = !eventStatus.value
    }
    return {eventStatus, toggleEventStatus}
  }
}
</script>

<template>
  <div class="solo-bar">
    <div class="container">
      <div class="wrapper">
        <button class="btn-sec">Back</button>
        <h1>Add One-on-One Event Type</h1>
        <div class="switch" @click="toggleEventStatus">
          <p>Your event type is</p>
          <ToggleSwitch :enabled="eventStatus" />
        </div>
      </div>
    </div>
  </div>
  <div class="solo-content">
    <div class="row-1">
      <div class="heading">
        <h3 class="copy__para--medium-dark">What event is this?</h3>
        <p class="copy__para--small">No Location Given</p>
      </div>
      <div class="actions">
        <button class="btn-tertiary--plain">Cancel</button>
        <button class="btn">Next</button>
      </div>
    </div>
    <div class="row-2">
      <div class="form">
        <div class="form__input">
          <label for="name">Event name *</label>
          <input type="text" id="name">
        </div>
        <div class="form__input">
          <label for="description">Description *</label>
          <div id="description">
            <CustomQuill />
          </div>
        </div>
        <div class="form__input">
          <label for="link">Event Link *</label>
          <p class="link">calendly.com/username/</p>
          <input type="text" id="link">
        </div>
      </div>
    </div>
    <div class="row-3">
      <div class="actions">
        <button class="btn-tertiary--plain">Cancel</button>
        <button class="btn">Next</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.solo-content {
  max-width: 55%;
  margin: auto;
  width: 100%;
  margin-bottom: 4rem;
  border: 2px solid var(--color-secondary-dark);
  border-radius: 6px;

  .row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-secondary);
    padding: 2rem 2rem;

    .actions {
      display: flex;
      column-gap: 1.5rem;
      align-items: center;
    }
  }

  .row-2 {
    padding: 3rem 4rem;

    .form {
      display: grid;
      grid-gap: 3rem;
      width: 40%;

      &__input {
        display: grid;
        grid-gap: 1rem;

        label {
          font-size: 1.4rem;
          font-weight: 700;
        }

        input, #description {
          border-radius: 6px;
          border: 1px solid var(--color-secondary);
          background-color: transparent;
        }
        input{
          width: 100%;
          padding: 1rem 1.4rem;
          color: var(--color-text);
          font-size: 1.6rem;
          line-height: 1.5;
          overflow-wrap: normal;
        }
      }
    }
  }
  .row-3{
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid var(--color-secondary);
    padding: 2rem 2rem;

    .actions {
      display: flex;
      column-gap: 1.5rem;
      align-items: center;
    }
  }
}

.solo-bar {
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
      width: 100%;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 2rem;
        font-weight: 400;
        color: var(--color-text);
      }

      .switch {
        cursor: pointer;
        display: flex;
        align-items: center;
        column-gap: 1rem;
        font-size: 1.6rem;
      }
    }
  }
}
</style>

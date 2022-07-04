<script>
import ToggleSwitch from "../../components/ToggleSwitch.vue"
import { ref } from "vue"
export default {
  name: "SoloEventView",
  components: {
    ToggleSwitch
  },
  setup(){
    const eventStatus = ref(false);
    const toggleEventStatus = () => {
      eventStatus.value = !eventStatus.value
    }
    return { eventStatus, toggleEventStatus }
  }
}
</script>

<template>
  <div class="solo-bar">
    <div class="container">
      <div class="wrapper">
        <button class="btn-sec">Back</button>
        <h1>Create New Event Type</h1>
        <div class="switch" @click="toggleEventStatus">
          <p>Your event type is</p>
          <ToggleSwitch :enabled="eventStatus" />
        </div>
      </div>
    </div>
  </div>
  <div class="solo-content">
    <div class="row-1"></div>
    <div class="row-2"></div>
    <div class="row-3"></div>
  </div>
</template>

<style scoped lang="scss">
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
      max-width: 100%;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 2rem;
        font-weight: 400;
        color: var(--color-text);
      }
      .switch{
        display: flex;
        align-items: center;
        column-gap: 1rem;
        font-size: 1.6rem;
      }
    }
  }
}
</style>e

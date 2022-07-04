<script>
export default {
  name: "ToggleSwitch",
  props: {
    enabled: Boolean,
  },
};
</script>

<template>
  <div class="toggle-container" :class="{enabled: enabled, disabled: !enabled}">
    <p v-if="enabled">ON</p>
    <div class="dialog-button"></div>
    <p v-if="!enabled">OFF</p>
  </div>
</template>

<style scoped lang="scss">
.toggle-container {
  width: 7rem;
  height: 3.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 .5rem;
}

.dialog-button {
  background-color: white;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
}
p{
  font-size: 1.4rem;
}

.enabled {
  border: 1px solid #038164;
  p{
    color: #038164;
    padding-left: 1rem;
  }
  .dialog-button {
    background-color: #038164;
  }
}

.disabled {
  background-color: #757575;
  p{
    color: white;
    padding-right: .5rem;
  }
}
</style>

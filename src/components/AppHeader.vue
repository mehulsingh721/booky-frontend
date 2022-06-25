<script>
</script>

<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <img class="logo" src="../assets/logo.png" alt="app-logo">
      <ul class="app-header__nav--links">
        <li class="link">Home</li>
        <li class="link">Availability</li>
        <li class="link">Integrations</li>
        <li class="link">Help</li>
        <li class="link">Account</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.app-header{
  width: 100%;
  &__nav{
    display: flex;
    width: 80%;
    justify-content: space-between;
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

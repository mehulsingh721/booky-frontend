<script>
import {RouterLink, RouterView} from "vue-router"
</script>

<template>
  <div class="home-bar">
    <div class="container">
      <div class="home-bar__title">
        <h1 class="heading-1">My Calendly</h1>
        <button class="btn">+ Create</button>
      </div>
      <ul class="home-bar__links">
        <li><RouterLink to="/"><div>Event Types</div></RouterLink></li>
        <li><RouterLink to="/scheduled_events"><div>Scheduled Events</div></RouterLink></li>
        <li>Workflows</li>
        <li>Routing Forms</li>
      </ul>
    </div>
  </div>
  <div class="home-content">
    <RouterView></RouterView>
  </div>
</template>

<style scoped lang="scss">
.home-bar{
  background-color: var(--color-body);
  padding-top: 2rem;
  box-shadow: 0 20px 20px -20px rgba(0,0,0,.15);
  .container{
    padding: 0 2rem;
    max-width: 55%;
    margin: auto;
    width: 100%;
    margin-bottom: 4rem;
  }
  &__title{
    display: flex;
    justify-content: space-between;
  }
  &__links{
    display: flex;
    list-style: none;
    column-gap: 3rem;
    margin-top: 3rem;
    li{
      font-size: 1.6rem;
      color: var(--color-text-light);
      font-weight: 400;
        box-sizing: inherit;
        height: max-content;
      a{
        div{
          padding-bottom: 1.5rem;
          box-sizing: inherit;
          &:hover{
              color: var(--color-text);
              border-bottom: 2px solid var(--color-secondary-dark);
          }
        }
      }
    }
  }
  a.router-link-exact-active{
    div{
      font-size: 1.6rem;
      color: var(--color-text);
      font-weight: 700;
      border-bottom: 2px solid var(--color-tertiary);
    }
  }
}
</style>

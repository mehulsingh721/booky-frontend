<script>
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="event-types">
    <div class="event-types__search">
      <input type="search" placeholder="Search">
    </div>

    <div class="event-types__user">
      <div class="event-types__user--info">
        <div class="badge">
          <p>J</p>
        </div>
        <div>
          <p class="name">john doe</p>
          <a class="link" href="calendly.com/hateyoh588">calendly.com/hateyoh588</a>
        </div>
      </div>

      <button class="btn-sec">+ New Event Type</button>
    </div>

    <div class="event-types__events">
      <div class="event-types__events--card">
        <div class="row-1">
          <input type="checkbox">
          <font-awesome-icon icon="fa-solid fa-gear" />
        </div>
        <div class="row-2">
          <h1 class="heading-1">30 Minute Meeting</h1>
          <p class="copy__para--medium">30 mins, One-on-One</p>
          <a href="https://www.google.com" class="btn-tertiary" target="_blank">View booking page</a>
        </div>
        <div class="row-3">
          <button class="btn-tertiary">Copy Link</button>
          <button class="btn-sec">Share</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.event-types {
  padding: 0 2rem;
  max-width: 55%;
  margin: auto;
  width: 100%;
  display: grid;
  grid-gap: 2rem;

  &__search {
    width: 100%;

    input {
      border: none;
      font-family: var(--font-body);
      font-size: 1.6rem;
      background-color: transparent;
    }
  }

  &__user {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-secondary);
    padding-bottom: 2rem;

    &--info {
      display: flex;
      column-gap: 1rem;
      align-items: center;

      .badge {
        font-size: 1.7rem;
        background-color: var(--color-secondary);
        height: 4rem;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      .name,
      .link {
        font-size: 1.4rem;
      }

      .link {
        color: var(--color-tertiary);
      }
    }
  }

  &__events {
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-gap: 2rem;

    &--card {
      background-color: var(--color-body);
      display: flex;
      flex-direction: column;
      row-gap: 2rem;
      border-radius: 4px;
      box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .1);
      border-top: 4px solid #8247f5;

      &:hover {
        top: -2px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .15);
      }

      .row-1 {
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
      }

      .row-2 {
        padding: 1rem 2rem;
      }

      .row-3 {
        border-top: 1px solid var(--color-secondary);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
      }
    }
  }
}
</style>

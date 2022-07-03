<script>
import {RouterLink, RouterView} from "vue-router"
import {ref} from "vue";
import CreateContextMenu from "./CreateContextMenu.vue";
export default {
  name: "HomeBar",
  components: {
    CreateContextMenu
  },
  setup() {
    const contextMenu = ref(false);

    const toggleContextMenu = () => {
      contextMenu.value = !contextMenu.value
    }

    return {contextMenu, toggleContextMenu};
  }
}
</script>

<template>
  <div class="home-bar">
    <div class="container">
      <div class="home-bar__title">
        <h1 class="heading-1">My Calendly</h1>
        <div class="context-menu">
          <button class="btn" @click="toggleContextMenu">+ Create</button>
          <CreateContextMenu v-if="contextMenu" />
        </div>
      </div>
      <ul class="home-bar__links">
        <li>
          <RouterLink to="/event_types">
            <div>Event Types</div>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduled_events">
            <div>Scheduled Events</div>
          </RouterLink>
        </li>
        <li>Workflows</li>
        <li>Routing Forms</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-bar {
  background-color: var(--color-body);
  padding-top: 2rem;
  box-shadow: 0 20px 20px -20px rgba(0, 0, 0, .15);

  .container {
    padding: 0 2rem;
    max-width: 55%;
    margin: auto;
    width: 100%;
    margin-bottom: 4rem;
  }

  .context-menu {
    position: relative;
    button {
      cursor: pointer;
    }
  }

  &__title {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__links {
    display: flex;
    list-style: none;
    column-gap: 3rem;
    margin-top: 3rem;

    li {
      font-size: 1.6rem;
      color: var(--color-text-light);
      font-weight: 400;
      box-sizing: inherit;
      height: max-content;

      a {
        div {
          padding-bottom: 1.5rem;
          box-sizing: inherit;

          &:hover {
            color: var(--color-text);
            border-bottom: 2px solid var(--color-secondary-dark);
          }
        }
      }
    }
  }

  a.router-link-exact-active {
    div {
      font-size: 1.6rem;
      color: var(--color-text);
      font-weight: 700;
      border-bottom: 2px solid var(--color-tertiary);
    }
  }
}
</style>

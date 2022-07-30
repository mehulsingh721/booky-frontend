<template>
  <HomeBar/>
  <div class="home-content">
    <div class="event-types">
      <div class="event-types__search">
        <input type="search" placeholder="Search">
      </div>

      <div class="event-types__user">
        <div class="event-types__user--info">
          <div class="badge">
            <p>{{store.fullName.charAt(0)}}</p>
          </div>
          <div>
            <p class="name">{{store.fullName}}</p>
            <a class="link" :href="'http://locahost:3000/' + store.username">localhost:3000/{{store.username}}</a>
          </div>
        </div>

        <RouterLink class="btn-sec" to="/event_types/new">+ New Event Type</RouterLink>
      </div>

      <div class="event-types__events">
        <div v-for="event in events" :key="event.id">
          <div class="event-types__events--card" :style="{borderTop: `5px solid ${event.color}`}">
            <div class="row-1">
              <input type="checkbox">
              <font-awesome-icon icon="fa-solid fa-gear" />
            </div>
            <div class="row-2">
              <h1 class="heading-1">{{event.name}}</h1>
              <p class="copy__para--medium">{{ event.duration }}, {{event.type}}</p>
              <a href="https://www.google.com" class="btn-tertiary" target="_blank">View booking page</a>
            </div>
            <div class="row-3">
              <button class="btn-tertiary">Copy Link</button>
              <button class="btn-sec">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../store.js"
import HomeBar from "../../components/HomeBar.vue"
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  components: {
    HomeBar,
  },
  setup(){
    const events = ref([])
    const getEvents = () => {
      axios.get("/api/events", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          Accept: "application/json"
        },
        params: {
          userId: localStorage.getItem("user_id")
        }
      }).then((res) => {
        events.value = res.data
      })
    }

    onMounted(() => {
      getEvents()
    })
    return { events, getEvents, store }
  }
}
</script>

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

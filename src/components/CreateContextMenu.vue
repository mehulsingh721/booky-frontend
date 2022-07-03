<script>
import {useRouter} from 'vue-router';

export default {
  name: "CreateContextMenu",
  setup(){
    const router = useRouter();
    const toNew = () => {
      router.push({
        name: "newEvents",
        query: {
          ...router.query
        }
      })
    }
    return { toNew };
  }
}
</script>

<template>
  <div class="menu">
    <div @click="toNew" class="menu__item">
      <font-awesome-icon icon="fa-solid fa-note-sticky" />
      <div>
        <h3>Event Type</h3>
        <p>Create a new template for your regularly scheduled events.</p>
      </div>
    </div>
    <div class="menu__item">
      <font-awesome-icon icon="fa-solid fa-ticket" />
      <div>
        <h3>One-off meeting</h3>
        <p>Invite someone to pick a time to meet with you.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  background-color: var(--color-body);
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  position: absolute;
  top: 5rem;
  right: 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, .2);
  width: 32rem;
  z-index: 1;

  &__item {
    display: flex;
    padding: .8rem 1.6rem;
    color: var(--color-text);

    svg {
      margin-right: 2rem;
      font-size: 2.7rem;
      color: inherit;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 700;
      color: inherit;
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
    }

    cursor: pointer;

    &:hover {
      background-color: var(--color-body-dark)
    }
  }
}
</style>

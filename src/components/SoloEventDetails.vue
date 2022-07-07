<template>
  <div class="details">
    <div class="row-1">
      <div class="heading">
        <h3 class="copy__para--medium-dark">What event is this?</h3>
        <p class="copy__para--small">No Location Given</p>
      </div>
      <div class="actions">
        <button class="btn-tertiary--plain">Cancel</button>
        <button @click="checkNextClick" class="btn">Next</button>
      </div>
    </div>

    <div class="row-2" v-if="expand">
      <div class="form">
        <div class="form__input">
          <label for="name">Event name *</label>
          <input v-model="eventName" type="text" id="name">
        </div>

        <div class="form__input">
          <label for="location">Event Location</label>
          <select id="location" v-model="meetLocation">
            <option value="" selected>Add Location</option>
            <option value="google-meet">Google Meet</option>
            <option value="zoom">Zoom</option>
          </select>
        </div>

        <div class="form__input">
          <label for="description">Description *</label>
          <div id="description">
            <div id="custom-toolbar">
              <!-- <div class="ql-formats"> -->
              <!--   <button class="ql-undo" aria-label="Undo" type="button"></button> -->
              <!--   <button class="ql-redo" aria-label="Redo" type="button"></button> -->
              <!-- </div> -->

              <div class="ql-formats">
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
              </div>
              <div class="ql-formats">
                <button class="ql-list" value="bullet"></button>
                <button class="ql-list" value="ordered"></button>
              </div>
              <div class="ql-formats">
                <button class="ql-link"></button>
              </div>
            </div>
            <QuillEditor v-model:content="description"
              placeholder="Write a summary and any details your invitee should know about the event." contentType="text"
              toolbar="#custom-toolbar" theme="snow" />
          </div>
        </div>
        <div class="form__input">
          <label for="link">Event Link *</label>
          <p class="link">calendly.com/username/</p>
          <input v-model="eventLink" type="text" id="link">
        </div>

        <div class="form__input">
          <label for="color">Event color *</label>
          <div class="form__input--colors">
            <button class="color" style="background-color: #ff4f00" @click="() => (eventColor = '#ff4f00')">
              <span v-if="eventColor === '#ff4f00'">
                <font-awesome-icon icon="fa-solid fa-check" />
              </span>
            </button>
            <button class="color" style="background-color: #ff758e" @click="() => (eventColor = '#ff758e')">
              <span v-if="eventColor === '#ff758e'">
                <font-awesome-icon icon="fa-solid fa-check" />
              </span>
            </button>
            <button class="color" style="background-color: #e55cff" @click="() => (eventColor = '#e55cff')">
              <span v-if="eventColor === '#e55cff'">
                <font-awesome-icon icon="fa-solid fa-check" />
              </span>
            </button>
            <button class="color" style="background-color: #8247f5" @click="() => (eventColor = '#8247f5')">
              <span v-if="eventColor === '#8247f5'">
                <font-awesome-icon icon="fa-solid fa-check" />
              </span>
            </button>
            <button class="color" style="background-color: #0099ff" @click="() => (eventColor = '#0099ff')">
              <span v-if="eventColor === '#0099ff'">
                <font-awesome-icon icon="fa-solid fa-check" />
              </span>
            </button>
            <button class="color" style="background-color: #0ae8f0" @click="() => (eventColor = '#0ae8f0')">
              <span v-if="eventColor === '#0ae8f0'">
                <font-awesome-icon icon="fa-solid fa-check" />
              </span>
            </button>
            <button class="color" style="background-color: #17e885" @click="() => (eventColor = '#17e885')">
              <span v-if="eventColor === '#17e885'">
                <font-awesome-icon icon="fa-solid fa-check" />
              </span>
            </button>
            <button class="color" style="background-color: #ccf000" @click="() => (eventColor = '#ccf000')">
              <span v-if="eventColor == '#ccf000'">
                <font-awesome-icon icon="fa-solid fa-check" />
              </span>
            </button>
            <button class="color" style="background-color: #f8e436" @click="() => (eventColor = '#f8e436')">
              <span v-if="eventColor === '#f8e436'">
                <font-awesome-icon icon="fa-solid fa-check" />
              </span>
            </button>
            <button class="color" style="background-color: #ffa600" @click="() => (eventColor = '#ffa600')">
              <span v-if="eventColor === '#ffa600'">
                <font-awesome-icon icon="fa-solid fa-check" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row-3" v-if="expand">
      <div class="actions">
        <button class="btn-tertiary--plain">Cancel</button>
        <button class="btn">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import {ref} from "vue";
export default {
  name: "SoloEventDetails",
  props: {
    next: Function
  },
  setup() {
    const eventStatus = ref(true);
    const eventName = ref("");
    const meetLocation = ref("");
    const description = ref("");
    const eventLink = ref("");
    const eventType = ref("");
    const eventColor = ref("#8247f5");
    const inviteeQuestions = ref("");
    const expand = ref(true)

    const toggleEventStatus = () => {
      eventStatus.value = !eventStatus.value
    }

    const checkNextClick = () => {
      expand.value = !expand.value
    }

    return {
      eventStatus,
      toggleEventStatus,
      eventName,
      meetLocation,
      description,
      eventLink,
      eventType,
      eventColor,
      inviteeQuestions,
      checkNextClick,
      expand
    }
  }
}
</script>


<style scoped lang="scss">
.details{
  border: 2px solid var(--color-secondary-dark);
  margin-bottom: 4rem;
  border-radius: 6px;
  &:hover{
    border: 1px solid var(--color-tertiary);
  }
}
.row-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;

  .actions {
    display: flex;
    column-gap: 1.5rem;
    align-items: center;
  }
}

.row-2 {
  border-top: 1px solid var(--color-secondary);
  padding: 3rem 4rem;
  transition: 1s;

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

      input,
      #description,
      select {
        border-radius: 6px;
        border: 1px solid var(--color-secondary);
        background-color: transparent;
      }

      input,
      select {
        width: 100%;
        padding: 1rem 1.4rem;
        color: var(--color-text);
        font-size: 1.6rem;
        line-height: 1.5;
        overflow-wrap: normal;
      }

      &--colors {
        display: flex;
        column-gap: 1rem;

        .color {
          height: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 4rem;
          padding: 1rem;
          border-radius: 50%;
          border: none;
          cursor: pointer;

          span {
            color: white;
            font-size: 2.0rem;
          }
        }
      }
    }
  }
}

.row-3 {
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

#custom-toolbar {
  border-bottom: none;
}

.ql-toolbar.ql-snow {
  border: none;
}
</style>

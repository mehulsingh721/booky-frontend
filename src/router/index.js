import { createRouter, createWebHistory } from "vue-router"
import EventTypesView from "../views/EventTypesView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event_types",
      component: EventTypesView
    },
  ]
})

export default router

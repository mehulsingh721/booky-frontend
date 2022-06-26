import { createRouter, createWebHistory } from "vue-router"
import EventTypesView from "../views/EventTypesView.vue"
import AvailabilityView from "../views/AvailabilityView.vue"
import IntegrationsView from "../views/IntegrationsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event_types",
      component: EventTypesView
    },
    {
      path: "/availability",
      name: "availability",
      component: AvailabilityView
    },
    {
      path: "/integrations",
      name: "integrations",
      component: IntegrationsView
    },
  ]
})

export default router

import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home/HomeView.vue"
import EventTypesView from "../views/Home/EventTypesView.vue"
import ScheduledEventsView from "../views/Home/ScheduledEventsView.vue"
import AvailabilityView from "../views/AvailabilityView.vue"
import IntegrationsView from "../views/IntegrationsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "",
          component: EventTypesView
        },
        {
          path: "scheduled_events",
          component: ScheduledEventsView
        }
      ]
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

import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home/HomeView.vue"
import EventTypesView from "../views/Home/EventTypesView.vue"
import ScheduledEventsView from "../views/Home/ScheduledEventsView.vue"
import AvailabilityView from "../views/AvailabilityView.vue"
import IntegrationsView from "../views/IntegrationsView.vue"
import NewEventTypesView from "../views/Home/NewEventTypeView.vue"
import SoloEventView from "../views/Home/SoloEventView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      redirect: "/event_types",
      children: [
        {
          path: "event_types",
          component: EventTypesView,
        },
        {
          path: "/event_types/new",
          name: "newEvents",
          component: NewEventTypesView
        },
        {
          path: "/event_types/new/solo",
          name: "soloEvent",
          component: SoloEventView
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

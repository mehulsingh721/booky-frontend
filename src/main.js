import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGear, faNoteSticky, faTicket } from '@fortawesome/free-solid-svg-icons'

import "@/assets/global-styles/typography.scss"
import "@/assets/global-styles/base.scss"
import "@/assets/global-styles/btn.scss"
/* add icons to the library */
library.add(faGear, faNoteSticky, faTicket)

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')

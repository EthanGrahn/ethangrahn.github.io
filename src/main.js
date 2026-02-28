import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faMapMarkerAlt, faCalendarAlt, faInfoCircle, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faMapMarkerAlt, faCalendarAlt, faInfoCircle, faFileCode, faGithub)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(vuetify)
app.mount('#app')
// debug logs removed

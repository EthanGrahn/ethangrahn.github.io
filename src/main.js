import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faMapMarkerAlt, faCalendarAlt, faInfoCircle, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faGooglePlay, faAppStore, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faMapMarkerAlt, faCalendarAlt, faInfoCircle, faFileCode, faGithub, faLinkedin, faGooglePlay, faAppStore, faGitlab)

const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(vuetify)
app.mount('#app')

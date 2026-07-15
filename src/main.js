import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faMapMarkerAlt, faInfoCircle, faFileCode, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faGooglePlay, faAppStore, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faMapMarkerAlt, faInfoCircle, faFileCode, faLightbulb, faGithub, faLinkedin, faGooglePlay, faAppStore, faGitlab)

const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faDatabase, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faDribbble, faVuejs, faLinux, faHtml5, faNodeJs, faGitAlt, faAdobe, faPython } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCodeHighlight from 'vue-code-highlight';
 
Vue.use(VueCodeHighlight)
 
library.add(faStar, faGithub, faInstagram, faDribbble, faDatabase, faVuejs, faLinux, faHtml5, faNodeJs, faGitAlt, faAdobe, faPython, faArrowRight)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.$hideCursor = function() {
  document.getElementById("circle").style.setProperty("--scale", "".concat(0))
}

Vue.prototype.$showCursor = function() {
  document.getElementById("circle").style.setProperty("--scale", "".concat(1))
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

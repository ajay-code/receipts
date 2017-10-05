import Notifications from './Notifications.vue'
import { events }    from './events'

var Loader = {
  install(Vue, params = {}) {
    if (this.installed) {
      return;
    }

    this.installed = true

    Vue.component('notifications', Notifications)
    Vue.prototype.$startLoading = (params) => {
      if (typeof params === 'string') {
        params = { title: '', text: params }
      }

      if (typeof params === 'object') {
        events.$emit('add', params)
      }
    }
  }
}

export default Loader;

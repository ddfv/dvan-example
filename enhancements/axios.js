import axios from 'axios'

export default ({ Vue }) => {
  // You can use `this.$http.[get, post, ...] in components`
  Vue.prototype.$http = axios
}
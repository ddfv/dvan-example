import axios from 'axios'

export default ({ Vue }) => {
  // You can use `this.$https.[get, post, ...] in components`
  Vue.prototype.$http = axios
}
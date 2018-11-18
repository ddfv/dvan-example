export default {
  render() {
    return (
      <div>
        { this.msg }, delete me will show default 404 page.
        <br/>
        <router-link to='/'>back to home</router-link>
      </div>
    )
  },

  data() {
    return {
      msg: '404 from `jsx`'
    }
  }
}
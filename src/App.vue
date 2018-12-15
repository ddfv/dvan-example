<script>
export default {
  render() {
    return (
      <div>
        <h1>{ this.msg }</h1>
        <input vModel={ this.msg } />
      </div>
    )
  },
  data() {
    return {
      msg: 'hello, vue jsx'
    }
  }
}
</script>

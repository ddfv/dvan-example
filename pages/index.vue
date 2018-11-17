<!-- <template>
  <div>
    <h1>index</h1>
    <Button></Button>
    <br>
    <router-link to=nested>nested</router-link>
    <router-link to=notfound>to 404</router-link>
  </div>
</template> -->

<script>
import Button from '../comps/Button'

export default {
  /* components: {
    Button
  }, */

  render() {
    return (
      <div>
        <h1>index</h1>
        <Button/>
        <br/>
        <router-link to='nested'>nested</router-link>
        &nbsp;
        <router-link to='notfound'>to 404</router-link>

        <p>{this.msg}</p>

        <input v-model={this.msg}/>

      </div>
    )
  },

  data() {
    return {
      msg: 'msgg'
    }
  }
}
</script>

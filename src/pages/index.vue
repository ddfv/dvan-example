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
        -
        <router-link to='notfound'>to 404</router-link>

        <div style='margin-top: 1rem;'>
          <input v-model={this.msg}/>
          <p>{this.msg}</p>
        </div>
      </div>
    )
  },

  data() {
    return {
      msg: 'edit me with v-model'
    }
  }
}
</script>

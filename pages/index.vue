<template>
  <div>
    <h1>index</h1>
    <Button></Button>
    <br>
    <router-link to=nested>nested</router-link>
    <router-link to=notfound>to 404</router-link>
  </div>
</template>

<script>
import Button from '../comps/Button'

export default {
  components: {
    Button
  }
}
</script>

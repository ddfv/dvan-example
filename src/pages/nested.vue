<template>
  <div>
    <h1>nested parent</h1>
    <Button></Button>
    <router-view/>
    <br>
    <router-link to=/>back to home</router-link>
  </div>
</template>

<script>
import Button from '@/comps/Button'

export default {
  components: {
    Button
  }
}
</script>

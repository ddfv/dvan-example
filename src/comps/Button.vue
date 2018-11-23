<template>
  <el-button @click="count += 1">button comp {{ count }}</el-button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

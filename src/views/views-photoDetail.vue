<template>
  <h1>Photo Detail</h1>
  
  <h2>我是 {{ id }} 照片喔</h2>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.photoId
    }
  }
}
</script>

<style>

</style>
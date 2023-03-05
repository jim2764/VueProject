<template>
  <h2>Album</h2>

  <router-link style="margin-right: 20px"  v-for="i in 10" :to="`/photo/${i}`" :key="i">{{ i }} Photo</router-link>
</template>

<script>
export default {
    name: "PhotoAlbum",
}
</script>

<style>

</style>
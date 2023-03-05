<template>
  <h1>Photo Detail</h1>
  
  <p>Id: {{ objData.id }}</p>
  <p>Name: {{ objData.name }}</p>
  <p>UserName: {{ objData.username }}</p>
  <p>Phone: {{ objData.phone }}</p>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      id: this.$route.params.photoId,
      objData: {},
    }
  },
  methods: {
    apiCall() {
      axios("https://jsonplaceholder.typicode.com/users/" + this.id)
      .then((response) => {
        this.objData = response.data
      })
      .catch(function(error) {
        alert(error)
      })
    }
  },
  created() {
    this.apiCall();
  }
}
</script>

<style>

</style>
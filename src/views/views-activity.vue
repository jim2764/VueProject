<template>
  <h1>Acivity</h1>

  <ul>
    <li><router-link to="/activity/show">Go to show</router-link></li>
    <li><router-link to="/activity/wow">Go to wow</router-link></li>
  </ul>

 
  

<router-view></router-view>
</template>

<script>
export default {
    name: "ViewsActivity"
}
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    background-color: aliceblue;
    height: 40px;
    justify-content: left;
    align-items: center;
  }
  li {
    height: 100%;
    line-height: 40px;
    font-size: 20px;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: lightcoral;
  }
  li:hover {
    border-bottom: solid 1px #000;;
  }
</style>
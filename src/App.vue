<template>
  <LayoutHeader></LayoutHeader>

  <main>
    <router-view></router-view>
  </main>

  <LayoutFooter></LayoutFooter>
</template>

<script>
import LayoutFooter from "./components/layout/layout-footer.vue"
import LayoutHeader from "./components/layout/layout-header.vue"

export default {
  name: "App",
  components: {
    LayoutFooter, LayoutHeader
  }
}

</script>

<style scoped>
  main {
    margin-top: 50px;
    min-height: 200vh;
  }
</style>

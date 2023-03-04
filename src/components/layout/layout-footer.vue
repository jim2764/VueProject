<template>
  <footer>
    <ul>
      <li>隱私政策</li>
      <li>Cookie</li>
      <li>人員招募</li>
      <li>關於我們</li>
    </ul>
  </footer>
</template>

<script>
export default {
    name: "LayoutFooter"
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    /* 垂直排列 */
    /* flex-direction: column; */
    justify-content: space-around;
    align-items: center;
    height: 50px;
  }
  footer {
    height: 50px;
    /* border: solid 1px black; */
    /* 寫卡片 */
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
</style>
<template>
    <header>
    <div class="container">
        <div class="circle"></div>    
        <ul>
            <li><router-link to="/">Index</router-link></li>
            <li><router-link to="/community">Community</router-link></li>
            <li><router-link to="/activity">Activity</router-link></li>
        </ul>
    </div>

    </header>

</template>

<script>
export default {
    name: "LayoutHeader"
}
</script>

<style scoped>
    .circle {
        width: 40px;
        height: 40px;
        background: greenyellow;
        border-radius: 50%;
    }
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 120px;
        padding-right: 120px;
    }
    header {
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #333333;
        z-index: 999999;
    }
    ul {
        margin: 0;
        padding: 0;
        /* width: 60%; */
        list-style: none;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
    }
    li {
        margin-right: 80px;
    }
    a {
        text-decoration: none;
        color: #fff
    }
    a:hover {
        color: yellow;
        border-bottom: solid yellow 1px;
    }

    .router-link-exact-active {
        color: yellow;
        border-bottom: solid yellow 1px;
    }
</style>
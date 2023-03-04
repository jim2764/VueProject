<template>
    <h1>Photo</h1>

    <ul>
        <li @click="pushquery('PhotoAlbum')">Album</li>
        <li @click="pushquery('PhotoCollection')">Collection</li>
    </ul>

    <component :is="page"></component>
</template>

<script>
import PhotoAlbum from "../components/Photo/photo-album.vue"
import PhotoCollection from "../components/Photo/photo-collection"

export default {
    name: "ViewsPhoto",
    components: {
        PhotoAlbum, PhotoCollection
    },
    computed: {
        page() {
            return this.$route.query.information
        }
    },
    methods: {
        pushquery(val) {
            this.$router.push({query:{
                information: val
            }})
        }
    }
}
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
        display: flex;
    }

    li {
        border: 1px solid gray;
        list-style: none;
        border-radius: 2px;
        transition: all 0.6s ;
        margin-right: 20px;
        padding: 10px;
    }

    li:hover {
        transform: scale(1.2);
        cursor: pointer;
        color: red;
        border: 2px solid  orchid;
    }
</style>
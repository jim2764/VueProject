import { createRouter, createWebHistory } from "vue-router"
import ViewaCommunity from "../views/views-community.vue"
import ViewaIndex from "../views/views-index.vue"
import Viewactivity from "../views/views-activity.vue"
import ViewPhotoDetail from "../views/views-photoDetail.vue"

const routes = [
    {
        path:"/",
        component: ViewaIndex,
    },
    {
        path: "/community",
        component: ViewaCommunity,

    },
    {
        path: "/activity",
        component: Viewactivity,
    },
    {
        path: "/photo/:photoId",
        component: ViewPhotoDetail
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
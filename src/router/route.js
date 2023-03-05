import { createRouter, createWebHistory } from "vue-router"
import ViewaCommunity from "../views/views-community.vue"
import ViewaIndex from "../views/views-index.vue"
import Viewactivity from "../views/views-activity.vue"
import ViewPhotoDetail from "../views/views-photoDetail.vue"
import ViewsNotFound from "../views/views-notfound.vue"
import ActivityShow from "../components/activity/activity-show.vue"
import ActivityWow from "../components/activity/activity-wow.vue"

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
        children: [
            {
                path: "show",
                component: ActivityShow
            },
            {
                path: "wow",
                component: ActivityWow
            }
        ]
    },
    {
        path: "/photo/:photoId(\\d+)",
        component: ViewPhotoDetail
    },
    {
        path: "/:pathMatch(.*)*", name: "NotFound", component: ViewsNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
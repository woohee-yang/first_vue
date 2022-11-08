import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import('@/components/Home.vue')
        },

        {
            path: '/about',
            component: () => import('@/components/About.vue')
        },

        {
            path: '/table',
            component: () => import('@/components/Table.vue')
        },
    ]
})
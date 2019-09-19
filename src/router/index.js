import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // USER
        {
            path: '/signin',
            name: 'Sign In',
            component: () => import('@/views/User/SignIn'),
            meta: { showFooter: true }
        },
        // HOME
        {
            path: '/',
            name: 'Map Viewer',
            component: () => import('@/views/Home.vue'),
            beforeEnter: AuthGuard
        },
        // LANDING PAGE
        {
            path: '/about',
            name: 'About',
            component: () => import('@/views/About'),
            meta: { showFooter: true }
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('@/views/Contact'),
            meta: { showFooter: true }
        },
        {
            path: '/support',
            name: 'Support',
            component: () => import('@/views/Support'),
            meta: { showFooter: true }
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('@/views/Admin'),
            meta: { showFooter: true }
        },
        // TEST
        {
            path: '/test',
            name: 'Test Page',
            component: () => import('@/views/Test')
        },
        // UNIDENTIFIED PAGE REQUEST
        {
            path: '*',
            name: 'Error404',
            component: () => import('@/views/Error404.vue')
        }
    ]
})

import Vue from 'vue'
import VueRouter  from 'vue-router'
import Home from '../components/nav/Home.vue'
import Reports from '../components/nav/Reports.vue'
import ViewCharts from '../components/views/ViewCharts.vue'
import Unread from '../components/views/Unread.vue'
import Statistics from '../components/views/Statistics.vue'

Vue.use(VueRouter )

export default new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/home/charts',
                    name: 'viewcharts',
                    component: ViewCharts
                },
                {
                    path: '/home/unread',
                    name: 'unread',
                    component: Unread
                },
                {
                    path: '/home/statistics',
                    name: 'statistics',
                    component: Statistics
                }
            ]
        },
        {
            path: '/reports',
            name: 'reports',
            component: Reports
        }
    ]
})
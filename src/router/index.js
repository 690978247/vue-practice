import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout'

Vue.use(VueRouter)
/* 
 hidden 是否在侧边栏显示
 affix 是否固定在tag栏
 noCache: true 是否需要缓存
*/

const routes = [
  {
    path: '/',
    component: layout,
    meta: { title: '首页', icon: 'el-icon-star-off' },
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import ('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', affix: true, }
      }
    ]
  },
  {
    path: '/nav',
    name: 'Nav',
    component: layout,
    redirect: '/nav/nav1-1',
    meta: { title: '导航页面', icon: 'el-icon-map-location' },
    children: [
      {
        path: 'nav1-1',
        name: 'Nav1-1',
        component: () => import('@/views/navPage/nav1/nav1-1.vue'),
        meta: { title: 'nav1-1页面' }
      },
      {
        path: 'nav1-2',
        name: 'Nav1-2',
        component: () => import('@/views/navPage/nav1/nav1-2.vue'),
        meta: { title: 'nav1-2页面' }
      },
      {
        path: 'nav1-3',
        name: 'Nav1-3',
        component: () => import('@/views/navPage/nav1/nav1-3.vue'),
        meta: { title: 'nav1-3页面' }
      },
      {
        path: 'nav1-4',
        name: 'Nav1-4',
        component: () => import('@/views/navPage/nav1/nav1-4-1.vue'),
        meta: { title: 'nav1-4页面' }
      },
      {
        path: 'nav2-1',
        name: 'Nav2-1',
        component: () => import('@/views/navPage/nav2/nav2-1.vue'),
        meta: { title: 'nav2-1页面' }
      },
      {
        path: 'nav2-2',
        name: 'Nav2-2',
        component: () => import('@/views/navPage/nav2/nav2-2-1.vue'),
        meta: { title: 'nav2-2页面' }
      },
      {
        path: 'nav3-1',
        name: 'Nav3-1',
        component: () => import('@/views/navPage/nav3/nav3-1.vue'),
        meta: { title: 'nav3-1页面' }
      },
      {
        path: 'nav4-1',
        name: 'Nav4-1',
        component: () => import('@/views/navPage/nav4/nav4-1.vue'),
        meta: { title: 'nav4-1页面' }
      }
    ]
  },
  {
    path: '/test',
    component: layout,
    meta: { title: '测试', icon: 'el-icon-s-flag' },
    redirect: '/test/index',
    children: [
      {
        path: 'index',
        component: () => import ('@/views/testPage/test.vue'),
        name: 'Test',
        meta: { title: '测试', noCache: true}
      },
      {
        path: 'test2',
        component: () => import ('@/views/testPage/test2.vue'),
        name: 'Test2',
        meta: { title: '测试2'}
      }
    ]
  },
  {
    path: '/study',
    component: layout,
    meta: { title: '学习', icon: 'el-icon-s-claim' },
    redirect: '/study/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/study/ES6/study'),
        name: 'Study',
        meta: { title: 'study' }
      },
      {
        path: 'destruction',
        component: () => import('@/views/study/ES6/destruction'),
        name: 'Destruction',
        meta: { title: '解构' }
      },
      {
        path: 'canvas',
        component: () => import('@/views/study/Html/canvas'),
        name: 'Canvas',
        meta: { title: 'canvas画布' }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    hidden: true,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '@/views/404.vue')
    },
    meta: { title: '404页面' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

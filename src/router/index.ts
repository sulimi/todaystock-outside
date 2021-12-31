import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from "@/views/Home.vue";
import Category from "@/views/Category.vue";
import TableList from "@/views/TableList.vue";
import ContactUs from "@/views/ContactUs.vue";
import Grad from "@/views/Grad.vue";
import Bag from "@/views/Bag.vue";
import Error from "@/views/Error.vue";

const areaUrl = localStorage.getItem("t_s_area");

const homeUrl = areaUrl ? `${areaUrl}/home` : '/';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/vuex',
  //   name: 'Vuex',
  //   component: Vuex
  // },
  // {
  //   path: '/axios',
  //   name: 'Axios',
  //   component: () => import('@/views/Axios.vue') // 懒加载组件
  // }

  {
    path: `/`,
    name: "home",
    component: Home,
    children: [
      {
        path: `${areaUrl}`,
        redirect: homeUrl,
      },
      {
        path: homeUrl,
        name: "Inventory",
        component: areaUrl === "hk" ? Category : TableList,
      },
      {
        path: `${areaUrl}/contact`,
        name: "Contact",
        component: ContactUs,
      },
      {
        path: `${areaUrl}/bag`,
        name: "bag",
        component: Bag,
      },
      {
        path: `${areaUrl}/grad`,
        name: "Grad",
        component: Grad,
      },
      {
        path: `${homeUrl}/K1-K4`,
        name: "K1-K4",
        component: TableList,
      },
      {
        path: `${homeUrl}/PBD`,
        name: "PBD",
        component: TableList,
      },
      {
        path: `${homeUrl}/iCloud-MDM`,
        name: "iCloud-MDM",
        component: TableList,
      },
      {
        path: `${homeUrl}/PGD`,
        name: "PGD",
        component: TableList,
      },
      {
        path: `${homeUrl}/Carrier-Lock`,
        name: "Carrier-Lock",
        component: TableList,
      },
      {
        path: "/*",
        name: "Error",
        component: Error,
      },
    ],
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

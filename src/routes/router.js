import Vue from "vue"
import VueRouter from "vue-router"

import GalleriesApp from "../pages/GalleriesApp.vue"
import AppLogin from "../pages/AppLogin.vue"
import AppRegister from "../pages/AppRegister.vue"

//import { requiresAuth, guestOnly } from "./guards"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/galleries"
    },
    {
      path: "/galleries",
      component: GalleriesApp,
      name: "galleries"
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/login",
      component: AppLogin,
      name: "login"
      // meta: {
      //   guestOnly: true
      // }
    },
    // {
    //   path: "/add",
    //   component: AddMovie,
    //   name: "add-movie",
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path: "/register",
      component: AppRegister,
      name: "register"
      // meta: {
      //   guestOnly: true
      // }
    }
    // {
    //   path: "/movies/:id",
    //   component: AppMovie,
    //   name: "movie",
    //   meta: {
    //     requiresAuth: true
    //   }
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//   Promise.resolve(to)
//     .then(requiresAuth)
//     .then(guestOnly)
//     .then(() => {
//       next()
//     })
//     .catch(redirect => {
//       next(redirect)
//     })
// })

export default router

import Vue from "vue"
import VueRouter from "vue-router"

import GalleriesApp from "../pages/GalleriesApp.vue"
import AppLogin from "../pages/AppLogin.vue"
import AppRegister from "../pages/AppRegister.vue"
import AppGallery from "../pages/AppGallery.vue"
import UserGalleries from "../pages/UserGalleries.vue"
import CreateGallery from "../pages/CreateGallery.vue"
import MyGalleries from "../pages/MyGalleries.vue"
import EditGallery from "../pages/EditGallery.vue"

import { requiresAuth, guestOnly } from "./guards"

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
    },
    {
      path: "/my-galleries",
      component: MyGalleries,
      name: "my-galleries",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit-gallery/:id",
      component: EditGallery,
      name: "edit-gallery",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      component: AppLogin,
      name: "login",
      meta: {
        guestOnly: true
      }
    },
    {
      path: "/create",
      component: CreateGallery,
      name: "create",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/authors/:id",
      component: UserGalleries,
      name: "author-galleries"
    },
    {
      path: "/register",
      component: AppRegister,
      name: "register",
      meta: {
        guestOnly: true
      }
    },
    {
      path: "/galleries/:id",
      component: AppGallery,
      name: "gallery"
    }
  ]
})

router.beforeEach((to, from, next) => {
  Promise.resolve(to)
    .then(requiresAuth)
    .then(guestOnly)
    .then(() => {
      next()
    })
    .catch(redirect => {
      next(redirect)
    })
})

export default router

<template>
  <div id="app">
    <nav-bar v-if="!getIsAuthenticated" />
    <nav-reg v-else />
    <div class="container mt-4">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import GalleriesApp from './pages/GalleriesApp.vue'
import AppLogin from './pages/AppLogin.vue'
import AppRegister from './pages/AppRegister.vue'
import NavReg from './components/NavReg.vue'
import CreateGallery from './pages/CreateGallery.vue'
import MyGalleries from './pages/MyGalleries.vue'
import EditGallery from "./pages/EditGallery.vue"

import { mapGetters } from 'vuex'
import { authService } from "./services/Auth.js"


export default {
  name: 'app',
  components: {
    NavBar,
    GalleriesApp,
    AppLogin,
    AppRegister,
    NavReg,
    CreateGallery,
    MyGalleries,
    EditGallery
    
  },
  computed: {
    ...mapGetters(['getIsAuthenticated']),
  },
  created() {
    if(window.localStorage.getItem('loginToken')) {
      this.$store.commit('setIsAuthenticated', true)
    }
  }

}
</script>



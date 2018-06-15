<template>
  <div id="app">
    <nav-bar />
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


export default {
  name: 'app',
  components: {
    NavBar,
    GalleriesApp,
    AppLogin,
    AppRegister,
    NavReg
    
  }
}
</script>



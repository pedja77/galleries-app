<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">GalleriesApp</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" to="/galleries">All Galleries</router-link>
        <router-link class="nav-item nav-link" to="/my-galleries">My Galleries</router-link>
        <router-link class="nav-item nav-link" :to="{name: 'create'}">Create New Gallery</router-link>
        <a class="nav-item nav-link" href="#" @click="logout">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { authService } from '../services/Auth.js'

export default {
  methods: {
    logout() {
      authService.logout()
      this.$router.push("/galleries")
      console.log("logout", this.$store.getters.getIsAuthenticated)
    }
  }
}
</script>

<style>
</style>

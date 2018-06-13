<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">GalleriesApp</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" to="/galleries">All Galleries</router-link>
        <router-link class="nav-item nav-link" to="/login">Login</router-link>
        <router-link class="nav-item nav-link" to="/register">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
</style>

<template>
  <div>

    <div class="alert alert-danger" role="alert" v-if="showError">
      Invalid email or password.
    </div>

    <form @submit.prevent="login">
      <div class="form-group row">
        <label for="email" class="col-4 col-form-label">Email:</label>
        <div class="col-8">
          <input id="email" name="email" placeholder="Email" type="text" class="form-control here" v-model="credentials.email">
        </div>
      </div>
      <div class="form-group row">
        <label for="password" class="col-4 col-form-label">Password:</label>
        <div class="col-8">
          <input id="password" name="password" placeholder="Password" type="password" class="form-control here" v-model="credentials.password">
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { authService } from "../services/Auth.js"

export default {
  data()  {
    return {
      credentials: {
        email: '',
        password: ''
      },
      showError: false
    }
  },
  methods: {
    login() {
      authService
        .login(this.credentials.email, this.credentials.password)
        .then(() => {
          this.showError = false
          this.$router.push({ name: "galleries" })
          
        })
        .catch(err => {
          this.showError = true
        })
    }
  }
  
}
</script>

<style>
</style>

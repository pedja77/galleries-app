<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

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
          <input id="password" name="password" placeholder="Password" type="text" class="form-control here" v-model="credentials.password">
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
      }
    }
  },
  methods: {
    login() {
      authService
        .login(this.credentials.email, this.credentials.password)
        .then(() => {
          this.errMessage = ""
          //console.log("before push")
          this.$router.push({ name: "galleries" })
          //this.$eventHub.$emit("user-loged-in", authService.isAuthenticated())
          //console.log("after push")
        })
        .catch(err => {
         // console.log('err', err)
          // let error = err.response.data.error.split("_").join(" ")
          // this.errMessage = error
          console.log("EE", err)
        })
    }
  }
  
}
</script>

<style>
</style>

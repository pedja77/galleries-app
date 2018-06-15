<template>
  <div>
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"> -->

    <form @submit.prevent="register">
      <div class="form-group row">
        <label for="first-name" class="col-4 col-form-label">First name:</label>
        <div class="col-8">
          <input id="first-name" name="first-name" placeholder="First name ..." type="text" class="form-control here" v-model="user.first_name">
          <div class="alert alert-danger" v-if="errors.first_name">
            <p v-for="(err, index) in errors.first_name" :key="index">{{ err }}</p>
          </div>
        </div>
      </div>

      <div class="form-group row">
        <label for="last-name" class="col-4 col-form-label">Last name:</label>
        <div class="col-8">
          <input id="last-name" name="last-name" placeholder="Last name..." type="text" class="form-control here" v-model="user.last_name">
          <div class="alert alert-danger" v-if="errors.last_name">
            <p v-for="(err, index) in errors.last_name" :key="index">{{ err }}</p>
          </div>
        </div>
      </div>

      <div class="form-group row">
        <label for="email" class="col-4 col-form-label">Email:</label>
        <div class="col-8">
          <input id="email" name="email" placeholder="Email" type="text" class="form-control here" v-model="user.email">
          <div class="alert alert-danger" v-if="errors.email">
            <p v-for="(err, index) in errors.email" :key="index">{{ err }}</p>
          </div>
        </div>

      </div>

      <div class="form-group row">
        <label for="password" class="col-4 col-form-label">Password:</label>
        <div class="col-8">
          <input id="password" name="password" placeholder="Password" type="password" class="form-control here" v-model="user.password">
          <div class="alert alert-danger" v-if="errors.password">
            <p v-for="(err, index) in errors.password" :key="index">{{ err }}</p>
          </div>
        </div>
      </div>

      <div class="form-group row">
        <label for="text2" class="col-4 col-form-label">Confirm password</label>
        <div class="col-8">
          <input id="text2" name="text2" placeholder="Confirm password..." type="password" class="form-control here" v-model="user.password_confirmation">
          <div class="alert alert-danger" v-if="errors.password_confirmation">
            <p v-for="(err, index) in errors.password_confirmation" :key="index">{{ err }}</p>
          </div>
        </div>
      </div>

      <label><input type="checkbox" v-model="user.accepted_terms" true-value="1" false-value="0">Accept Terms and Conditions</label>
      <div class="alert alert-danger" v-if="errors.accepted_terms">
        <p v-for="(err, index) in errors.accepted_terms" :key="index">{{ err }}</p>
      </div>

      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Register</button>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
import { authService } from "../services/Auth.js"
export default {
  data() {
    return {
      user: {
        first_name: "",
        last_name: '',
        email: "",
        password: "",
        password_confirmation: "",
        accepted_terms: 0
      },
      errors: {}
    }
  },
  methods: {
    register() {
      authService
        .register(this.user)
        .then(() => {
          this.$router.push({ name: "galleries" })
        })
        .catch(err => {
          console.log(err.response.data)
          this.errors = err.response.data
        })
    }
  }
}
</script>

<style>
</style>

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

      <div class="form-group row">
        <div class="offset-4 col-8">
          <label><input type="checkbox" v-model="user.accepted_terms" true-value="1" false-value="0">Accept Terms and Conditions</label>
          <div class="alert alert-danger" v-if="errors.accepted_terms">
            <p v-for="(err, index) in errors.accepted_terms" :key="index">{{ err }}</p>
          </div>
        </div>
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
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        accepted_terms: 0
      },
      errors: {},
      //showErrors: false
    }
  },
  methods: {
    register() {
      if (this.validateForm()) {
        //this.showErrors = false
        authService
        .register(this.user)
        .then(() => {
          this.$router.push({ name: "galleries" })
        })
        .catch(err => {
          if (err instanceof TypeError) {
            console.log(err)
          } else {
            console.log(err.response.data)
            this.errors = err.response.data
          }
        })
      } else {
        //this.showErrors = true
        console.log(this.errors)
      }
      
    },
    validateForm() {
      
      const validateEmail = (email) => {
        let re = /^\S+@\S+[\.][0-9a-z]+$/
        return re.test(email);
      }

      let isFormValid = true
      let errors = {}

      if (!this.user.first_name) {
        errors.first_name = ["First name is required"]
        isFormValid = false
      }
      if (!this.user.last_name) {
        errors.last_name = ["Last name is reqiured"]
        isFormValid = false
      }
      if (!validateEmail(this.user.email)) {
        errors.email = ["This field must be valid email"]
        isFormValid = false
      }
      if (this.user.password != this.user.password_confirmation) {
        errors.password = ["Password and password confirmation does't match"]
        isFormValid = false
      }
      if (!/[0-9a-zA-Z]{8,}/.test(this.user.password)) {
        errors.password = ["Password must be at least 8 characters long and contain at least one digit"]
        isFormValid = false
      }
      if (this.user.accepted_terms == 0) {
        errors.accepted_terms = ["You must accept terms and conditions to register"]
        isFormValid = false
      }
      this.errors = errors
      return isFormValid

    }
  }
}
</script>

<style>
</style>

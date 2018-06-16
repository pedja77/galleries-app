import axios from "axios"
import { store } from "../store"

axios.defaults.baseURL = "http://localhost:8000/api"
//axios.defaults.headers.common = { "Access - Control - Allow - Origin": " *" }

export default class AuthService {
  login(email, password) {
    return axios
      .post("/login", {
        email,
        password
      })
      .then(response => {
        console.log("login", response.data) // eslint-disable-line
        window.localStorage.setItem("loginToken", response.data.token)
        window.localStorage.setItem("loggedUserId", response.data.user.id)
        this.setAxiosDefaultAuthorizationHeader()
        store.commit("setIsAuthenticated", true)
      })
  }

  setAxiosDefaultAuthorizationHeader() {
    const TOKEN = window.localStorage.getItem("loginToken")
    axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`
  }

  logout() {
    window.localStorage.removeItem("loginToken")
    window.localStorage.removeItem("loggedUserId")
    delete axios.defaults.headers.common["Authorization"]
    store.commit("setIsAuthenticated", false)
  }

  isAuthenticated() {
    return !!window.localStorage.getItem("loginToken")
  }

  register(newUser) {
    return axios.post("/register", newUser).then(response => {
      window.localStorage.setItem("loginToken", response.data.token)
      window.localStorage.setItem("loggedUserId", response.data.user.id)
      this.setAxiosDefaultAuthorizationHeader()
      store.commit("setIsAuthenticated", true)
    })
  }
}

export const authService = new AuthService()

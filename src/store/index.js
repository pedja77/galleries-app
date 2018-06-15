import Vue from "vue"
import Vuex from "vuex"
//import GalleryService from "../services/GalleryService"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isAuthenticated: false
    // searchTerm: "",
    // movies: []
  },
  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated
    }
    // getSearchTerm(state) {
    //   return state.searchTerm
    // },
    // getMovies(state) {
    //   return state.movies
    // }
  },
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value
    }
    // setSearchTerm(state, searchTerm) {
    //   state.searchTerm = searchTerm
    // },
    // setMovies(state, movies) {
    //   state.movies = movies
    // }
  },
  actions: {
    // fetchMovies(store, next) {
    //   console.log("fetchMovies") // eslint-disable-line
    //   // MovieService.getAllMovies().then(response => {
    //   //   let movies = response.data.map(movie => {
    //   //     movie.duration = Number(movie.duration)
    //   //     return movie
    //   //   })
    //   MovieService.getAllMovies().then(({ data }) => {
    //     next(context => {
    //       context.movies = data
    //       store.commit("setMovies", context.movies)
    //     })
    //     // store.commit("setMovies", movies)
    //   })
    // }
  }
})

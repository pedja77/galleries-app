import Axios from "axios"

class GalleryService {
  constructor() {
    this.client = new Axios.create({
      baseURL: "http://localhost:8000/api/"
    })
  }

  getAllGalleries() {
    return this.client.get("/galleries")
  }

  // addMovie(movie) {
  //   return this.client.post("/movies", movie)
  // }

  // getMovie(id) {
  //   return this.client.get(`/movies/${id}`)
  // }
}

const galleryService = new GalleryService()

export { galleryService as GalleryService }

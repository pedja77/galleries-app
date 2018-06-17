import Axios from "axios"

export default class GalleryService {
  constructor() {
    this.client = new Axios.create({
      baseURL: "http://localhost:8000/api/"
    })
  }

  getAllGalleries(params) {
    return this.client.get("/galleries", { params })
  }

  getGallery(id) {
    return this.client.get(`/galleries/${id}`)
  }

  saveGallery(gallery) {
    return this.client.post("/galleries", gallery)
  }

  saveGalleryComment(comment) {
    return this.client.post("/comments", comment)
  }

  deleteGalleryComment(id) {
    return this.client.delete(`/comments/${id}`)
  }

  editGallery(gallery) {
    return this.client.put("/galleries", gallery)
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

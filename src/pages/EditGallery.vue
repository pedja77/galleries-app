<template>
  <div>

    <form @submit.prevent="submit">
      <div class="form-group row">
        <label for="text" class="col-4 col-form-label">Gallery title:</label>
        <div class="col-8">
          <input id="text" name="text" placeholder="Gallery title..." type="text" class="form-control here" v-model="gallery.title">
          <div class="alert alert-danger" v-if="errors.title">
            <p v-for="(err, index) in errors.title" :key="index">{{ err }}</p>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="textarea" class="col-4 col-form-label">Gallery description:</label>
        <div class="col-8">
          <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control" v-model="gallery.description"></textarea>
          <div class="alert alert-danger" v-if="errors.description">
            <p v-for="(err, index) in errors.description" :key="index">{{ err }}</p>
          </div>
        </div>
      </div>
      <div class="form-group row" v-for="(url, index) in urls" :key="index">
        <label for="text1" class="col-4 col-form-label">Picture URL:</label>
        <div class="col-6">
          <input id="text1" name="text1" type="text" class="form-control here" v-model="urls[index]">
        </div>
        <div class="col-2">
          <button name="submit" type="button" class="btn btn-primary" :class="{disabled: index === 0}" @click="moveUp(index)">^</button>
          <button name="submit" type="button" class="btn btn-primary" :class="{disabled: index === urls.length - 1}" @click="moveDown(index)">v</button>
          <button name="submit" type="button" class="btn btn-danger" :class="{disabled: onlyOneUrl}" @click="removeUrl(index)">X</button>
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-4 col-8 text-right">
          <button name="submit" type="Button" class="btn btn-primary" @click="addUrl">Add URL</button>
        </div>
      </div>

      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
          <button name="submit" type="button" class="btn btn-warning" @click="cancel">Cancel</button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import { GalleryService } from '../services/GalleryService.js'

export default {
  data() {
    return {
      gallery: {
        title: '',
        description: ''
      },
      urls: [''],
      errors: {},
      id: null
    }
  },
  computed: {
    onlyOneUrl() {
      return this.urls.length === 1
    }
  },
  methods: {
    cancel() {
      this.$router.push({name: 'gallery', props: {id: this.id}})
    },
    validateForm() {
      let isFormValid = true
      let errors= {}
      if (this.gallery.title.length < 2 || this.gallery.title.length > 255) {
        errors.title = ['Title must have minumum 2 and maximum 255 characters']
        isFormValid = false
      }
      if (this.gallery.description.length > 1000) {
        errors.description = ['Description too long. Please restrain yourself to "only" 1000 characters']
        isFormValid = false
      }
      this.errors = errors
      return isFormValid
    },
    getGallery() {
      let gallery = {}
      gallery.id = this.$route.params.id
      gallery.user_id = window.localStorage.getItem("loggedUserId")
      gallery.title = this.gallery.title
      gallery.description = this.gallery.description
      gallery.gallery_items = this.urls.map((item, index) => {
        return {
          item_order: index,
          image_link: item
        }    
      })

      return gallery
    },
    submit() {
      console.log(GalleryService)
      if (this.validateForm()) {
        console.log('form valid')
        // GalleryService.editGallery(this.getGallery())
        //   .then(response => {
        //     console.log(response)
        //     this.$router.push({name: 'gallery', props: {id: this.id}})
        //   })
        //   .catch(err => {
        //     this.errors = err.response.data
        //   })
        console.log("Can't edit")
        this.$router.push({name: 'gallery', props: {id: this.id}})
      } else {
        return
      }
    },
    addUrl() {
      this.urls.push('')
    },
    removeUrl(index) {
      if (this.urls.length > 1) {
        this.urls.splice(index, 1)
      }     
    },
    moveUp(index) {
      if (index > 0) {
        let newUrls = this.urls.slice(0)
        let temp = newUrls[index]
        newUrls[index] = newUrls[index - 1]
        newUrls[index - 1] = temp
        this.urls = newUrls
      }
    },
    moveDown(index) {
      if (index < this.urls.length - 1) {
        let newUrls = this.urls.slice(0)
        let temp = newUrls[index]
        newUrls[index] = newUrls[index + 1]
        newUrls[index + 1] = temp
        this.urls = newUrls
      }
    }
  },
  created() {
    this.id = this.$route.params.id
    GalleryService.getGallery(this.$route.params.id)
      .then(response => {
        this.gallery.title = response.data.gallery.title
        this.gallery.description = response.data.gallery.description
        this.urls = response.data.gallery.gallery_items.map(item => item.image_link)
      })
  }

}
</script>

<style>
</style>

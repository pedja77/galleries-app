<template>
  <div>
    <h2>{{ gallery.title }}</h2>
    <p>Author:
      <router-link to="#">{{ gallery.gallery.user.first_name }} {{ gallery.gallery.user.last_name }}</router-link>
    </p>
    <p>{{ gallery.gallery.description }}</p>

    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel" interval="2000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a :href="gallery.gallery.gallery_items[0].image_link" target="_blank"><img class="d-block w-100" :src="gallery.gallery.gallery_items[0].image_link"></a>
        </div>
        <div class="carousel-item" v-for="(image, index) in gallery.gallery.gallery_items.slice(1)" :key="index">
          <a :href="image.image_link" target="_blank"><img class="d-block w-100" :src="image.image_link"></a>
        </div>

      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div v-if="showDeleteGallery">
      <button class="btn btn-danger" @click="deleteGallery">Delete this gallery</button>
    </div>

    <div>
      <h3>Comments</h3>
      <ul class="list-unstyled">
        <li class="list-item" v-for="comment in gallery.comments" :key="comment.id">
          <p>By: {{ comment.user.first_name }} {{ comment.user.last_name }}</p>
          <p>
            <small>Created at: </small>{{ comment.created_at }}</p>
          <p>{{ comment.content }}</p>
          <div v-if="showDelete(comment.user_id)">
            <button class="btn btn-danger" @click="deleteComment">Delete Comment</button>
          </div>
          <hr width="60%">
        </li>
      </ul>
    </div>
    <div v-if="getIsAuthenticated">
      <form @submit.prevent="submitComment">
        <div class="form-group row">
          <label for="textarea" class="col-4 col-form-label">Add Comment</label>
          <div class="col-8">
            <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control" v-model="comment"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import { GalleryService } from '../services/GalleryService.js'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      gallery: {},
      comment: '',
      logggedUserId: window.localStorage.getItem('loggedUserId')
      
    }
  },
  computed: {
    ...mapGetters(['getIsAuthenticated']),
    showDeleteGallery() {
      return this.gallery.gallery.user_id == window.localStorage.getItem("loggedUserId")
    }
  },
  methods: {
    deleteGallery() {
      if (confirm('Do you really need to delete this gallery?')) {
        // GalleryService.deleteGallery(this.gallery.gallery.id)
        //   .then(() => {
        //     console.log('Gallery deleted')
        //     this.$router.push({name: 'my-galleries'})
        //   })
        console.log('Gallery deleted')
        this.$router.push({name: 'my-galleries'})
      }
      
    },
    getGallery() {
      GalleryService.getGallery(this.$route.params.id)
      .then((response) => {
        this.gallery = response.data
      })
    },
    deleteComment(id) {
      if (confirm('Are you sure you want to delete this comment?')) {
        // GalleryService.deleteGalleryComment(id)
        //   .then(response => {
        //     console.log('Contact deleted', response)
        //     this.getGallery()
        //   })
        console.log('Nece da pise u bazu')  // eslint-disable-line 
      }
    },
    showDelete(id) {
      return window.localStorage.getItem('loggedUserId') == id
    },
    submitComment() {
      GalleryService.saveGalleryComment({
        user_id: window.localStorage.getItem('loggedUserId'),
        gallery_id: this.gallery.gallery.id,
        content: this.comment
      })
        .then(() => {
          this.comment = ''
          this.getGallery()
        })
    }
  },
  created() {
    console.log('user', window.localStorage.getItem('loggedUserId'))
    this.getGallery()
    console.log(this.gallery)
  }

}
</script>

<style>
</style>

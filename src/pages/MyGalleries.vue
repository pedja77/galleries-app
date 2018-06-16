<template>
  <div v-if="showGalleries">
    <ul class="list-unstyled">
      <li class="list-item" v-for="(gallery, index) in galleries" :key="index">
        <div class="row mb-4">
          <div class="col-4">
            <img :src="gallery.first_gallery_item.image_link" width="100%" />
          </div>
          <div class="col-8">
            <h4>
              <router-link :to="{name: 'gallery', params: {id: gallery.id}}">{{ gallery.title }}</router-link>
            </h4>
            <p>Author:
              <router-link :to="{name: 'author-galleries', params: {id: gallery.user.id}}">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link>
            </p>
            <p>
              <small>Created at</small> {{ gallery.created_at }}
            </p>
          </div>
        </div>
      </li>
    </ul>
    <button class="btn btn-primary" @click="loadMore" v-if="nextPageUrl">Load More</button>
  </div>
  <div v-else>
    <p>Currently, there are no galleries.</p>
  </div>

</template>

<script>
//import GalleriesList from '../components/GalleriesList.vue'

import { GalleryService } from '../services/GalleryService.js'
//import moment from 'moment'
import { mapGetters } from "vuex"

export default {
  components: {
    //GalleriesList
  },
  data() {
    return {
      galleries: [],
      nextPageUrl: '',
      page: 1,
      showGalleries: false,
      params: {}
      //userId: this.$route.params.id
    }
  },
  methods: {
    loadMore() {
      console.log('store', this.getIsAuthenticated)
      this.params.page = this.page + 1
      GalleryService.getAllGalleries(this.params)
        .then((response) => {
          console.log('more', response.data.data)
          this.galleries = this.galleries.concat(response.data.data)
          console.log('more2', this.galleries)
          this.nextPageUrl = response.data.next_page_url
          this.page++
        })
    },
    // setRequestParams () {
    //   if (this.$route.params.id) {
    //     this.params.id = this.$route.params.id  // Get all galleries created by user
    //   }
    //   if (this.$route.name == '')
    // }
  },
  computed: {
    ...mapGetters(['getIsAuthenticated'])
  },
  created() {
    // if (this.$route.name == "author-galleries") {
    //   this.params = {
    //     id: this.$route.params.id
    //   }
    // }
    this.params.id = window.localStorage.getItem('loggedUserId')
    GalleryService.getAllGalleries(this.params)
      .then((response) => {
        if (response.data.data) {
          console.log(response.data.data)
          this.galleries = response.data.data
          this.nextPageUrl = response.data.next_page_url
          this.page = response.data.current_page
          this.showGalleries = true
          //console.log('more42', response.data.data)
        }        
      })
      .catch((err) => {
        cosole.log(err)
      })
      console.log('route name', this.$route.name)
      
  }
}
</script>




<template>
  <div v-if="showGalleries">
    <ul class="list-unstyled">
      <li class="list-item" v-for="(gallery, index) in galleries" :key="index">
        <div class="row mb-4">
          <div class="col-4">
            <img :src="gallery.first_gallery_item.image_link" width="100%" />
          </div>
          <div class="col-8">
            <h4>{{ gallery.title }}</h4>
            <p>Author: {{ gallery.user.first_name }} {{ gallery.user.last_name }}</p>
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
import { GalleryService } from '../services/GalleryService.js'

export default {
  data() {
    return {
      galleries: [],
      nextPageUrl: '',
      page: 1,
      showGalleries: false
    }
  },
  methods: {
    loadMore() {
      GalleryService.getAllGalleries(this.page + 1)
        .then((response) => {
          console.log('more', response.data.data)
          this.galleries = this.galleries.concat(response.data.data)
          console.log('more2', this.galleries)
          this.nextPageUrl = response.data.next_page_url
          this.page++
        })
    }
  },
  created() {
    GalleryService.getAllGalleries()
      .then((response) => {
        if (response.data.data) {
          console.log(response.data.data)
          this.galleries = response.data.data
          this.nextPageUrl = response.data.next_page_url
          this.page = response.data.current_page
          this.showGalleries = true
        }
        
      })
  }
}
</script>



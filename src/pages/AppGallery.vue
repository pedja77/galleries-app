<template>
  <div>
    <h2>{{ gallery.title }}</h2>
    <p>Author:
      <router-link to="#">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link>
    </p>
    <p>{{ gallery.description }}</p>

    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel" interval="2000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a :href="gallery.gallery_items[0].image_link" target="_blank"><img class="d-block w-100" :src="gallery.gallery_items[0].image_link"></a>
        </div>
        <div class="carousel-item" v-for="(image, index) in gallery.gallery_items.slice(1)" :key="index">
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

  </div>
</template>

<script>
import { GalleryService } from '../services/GalleryService.js'

export default {
  data() {
    return {
      gallery: {},
      
    }
  },
  methods: {
    
  },
  created() {
    console.log(this.$route.params.id)
    GalleryService.getGallery(this.$route.params.id)
      .then((response) => {
        console.log(response.data)
        this.gallery = response.data
        console.log('g', this.gallery)
      })
    console.log(this.gallery)
  }

}
</script>

<style>
</style>

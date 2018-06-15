<template>
  <div>
    <h2>{{ gallery.title }}</h2>
    <p>Author:
      <router-link to="#">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link>
    </p>
    <p>{{ gallery.description }}</p>

    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(image, index) in gallery.gallery_items" :key="index" :class="{ active: index == currentIndex }">
          <img class="d-block w-100" :src="image.image_link">
        </div>

      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev" @click.prevent="incCurrentIndex">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next" @click.prevent="decCurrentIndex">
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
      currentIndex: 0
    }
  },
  methods: {
    incCurrentIndex() {
      this.currentIndex++
    },
    decCurrentIndex() {
      this.currentIndex--
    }
  },
  created() {
    console.log(this.$route.params.id)
    GalleryService.getGallery(this.$route.params.id)
      .then((response) => {
        console.log(response.data)
        this.gallery = response.data
        console.log('g', this.gallery)
      })
  }

}
</script>

<style>
</style>

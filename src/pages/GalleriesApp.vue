<template>
  <div>

  </div>
</template>

<script>
import { GalleryService } from '../services/GalleryService.js'

export default {

  created() {
    GalleryService.getAllGalleries()
      .then(response => {
        console.log(response.data.data)
      })
  }
}
</script>



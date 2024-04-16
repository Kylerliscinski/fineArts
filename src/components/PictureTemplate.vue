<script setup>
import { Picture } from "../models/Picture.js";


defineProps({picture: Picture})

</script>


<template>
  <RouterLink :to="{name: 'Large Picture', params: {pictureId: picture.id}}" class="selectable">
    <!-- <div class="col-4 p-1"> -->
      <img class="img-fluid" :src="picture.imgUrl" alt="">
    <!-- </div> -->
  </RouterLink>
</template>


<style lang="scss" scoped>

</style>
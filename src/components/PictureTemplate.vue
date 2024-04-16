<script setup>
import { Picture } from "../models/Picture.js";


defineProps({picture: Picture})

</script>


<template>
    <div class="col-4 p-1">
      <img class="img-fluid" :src="picture.imgUrl" alt="">
    </div>
</template>


<style lang="scss" scoped>

</style>
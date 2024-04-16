<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { picturesService } from "../services/PicturesService.js";
import Pop from "../utils/Pop.js";


const route = useRoute()

const activePicture = computed(()=> AppState.activePicture)

async function getPictureById(){
  try {
    await picturesService.getPictureById(route.params.pictureId)
  } catch (error) {
    Pop.toast("Cannot get the Large Picture", 'error')
    console.error(error)
  }
}

onMounted(()=>{
  getPictureById()
})

onUnmounted(()=>{

})

</script>


<template>
  <div class="component" v-if="activePicture">
    <img class="img-fluid" :src="activePicture.bigImg" alt="">
    <hr/>
    <h2 class="text-center">{{ activePicture.description }}</h2>
  </div>
</template>


<style lang="scss" scoped>

</style>
<script setup>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { picturesService } from "../services/PicturesService.js";
import Pop from "../utils/Pop.js";
import PictureTemplate from "../components/PictureTemplate.vue";


const pictures = computed(()=>AppState.pictures)

onMounted(()=>{
  drawPictures()
})

async function drawPictures(){
  try {
    await picturesService.drawPictures()
  }
  catch (error){
    Pop.toast("Could not find pictures", 'error')
    console.error(error)
  }
}

  async function changePage(pageNumber){
    try {
      await picturesService.changePage(pageNumber)
    } catch (error) {
      Pop.toast("Could not change the page", 'error')
      console.error(error)
    }
  scroll(0,0)
  }


</script>

<template>
  
  
  <h4 class="my-4">The Institute of Fine Arts</h4>
  <section class="row g-1">
    <PictureTemplate v-for="picture in pictures" :key="picture.id" :picture="picture" class="col-6 col-md-4 pb-2"/>
  </section>
  
  <section class="row my-2">
      <div class="col-4">
        <button :disabled="AppState.currentPage == 1" class="btn btn-success w-50" @click="changePage(AppState.currentPage - 1)" >Previous Page</button>
      </div>
      <div class="col-4 text-center">Page {{AppState.currentPage}} of {{ AppState.totalPages }}</div>
      <div class="col-4">
        <button :disabled="AppState.currentPage == AppState.totalPages" class="btn btn-success w-50 float-end" @click="changePage(AppState.currentPage + 1)">Next Page</button>
      </div>
    </section>
</template>

<style scoped lang="scss">

</style>

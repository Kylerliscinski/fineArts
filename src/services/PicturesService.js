import { AppState } from "../AppState.js"
import { Picture } from "../models/Picture.js";
import { api } from "./AxiosService.js"



class PicturesService {

  async drawPictures() {
    const response = await api.get('api/artworks')
    console.log('🎨', response.data);
    const pictures = response.data.artworks.map(pictureData => new Picture(pictureData))
    AppState.pictures = pictures
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }

  async changePage(pageNumber) {
    const response = await api.get(`api/artworks?page=${pageNumber}`)
    console.log('📃', response.data);
    const pictures = response.data.artworks.map(pictureData => new Picture(pictureData))
    AppState.pictures = pictures
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }

  async getPictureById(pictureId) {
    AppState.activePicture = null
    const response = await api.get(`api/artworks/${pictureId}`)
    console.log('🎬🖼️', response.data);
    AppState.activePicture = new Picture(response.data)
  }
}

export const picturesService = new PicturesService()
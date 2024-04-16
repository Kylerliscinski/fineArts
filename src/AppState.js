import { reactive } from 'vue'
import { Picture } from "./models/Picture.js"


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /**@type {Picture[]} */
  pictures: [],

  currentPage: 1,

  totalPages: 35,

  /**@type {Picture} */
  activePicture: null
})

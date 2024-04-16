

export class Picture {
  constructor(data) {
    this.id = data.id
    this.slug = data.slug
    this.height = data.height
    this.width = data.width
    this.imgUrl = data.imgUrls?.regular
    this.description = data.description
  }
}
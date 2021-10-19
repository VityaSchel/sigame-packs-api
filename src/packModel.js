import fetch from 'node-fetch'

export default class Pack {
  constructor(packInfo) {
    this.pack = packInfo
  }

  getId() {
    return this.pack._id['$oid']
  }

  getName() {
    return this.pack.package.name
  }

  getAuthors() {
    return this.pack.package.info.authors
  }

  getDate() {
    return Date.parse(this.pack.package.date)
  }

  getDifficulty() {
    return this.pack.package.difficulty
  }

  getPublishDate() {
    return new Date(this.pack.info.date * 1000)
  }

  getAuthorVKId() {
    return this.pack.info.from
  }

  getFile() {
    return {
      size: this.pack.info.size,
      url: this.pack.info.url,
      downloads: this.pack.info.downloads
    }
  }

  getRounds() {
    return this.pack.package.rounds
  }

  async getContentXML() {
    const responseRaw = await fetch(`https://sigame.ru/api/content?pack=${this.getId()}&type=json`)
    const response = await responseRaw.json()
    return response.data
  }
}

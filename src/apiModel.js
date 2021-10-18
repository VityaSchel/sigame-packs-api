import fetchPacks from './fetchPacks.js'

export default class SIGamePacksAPI {
  constructor() {}

  query() {
    function search(term, options) {
      this.params.set('q', term)
      if(options) {
        const types = {
          name: 'Name',
          themes: 'Theme',
          rounds: 'Round',
          questions: 'Question',
          answers: 'Answer',
          comments: 'Comment',
          authors: 'Author',
          posterID: 'Uploader id',
          date: 'Date'
        }

        const shownCategories = Object.fromEntries(Object.entries(options).filter(([, showCategory]) => showCategory === true))
        const filters = Object.keys(shownCategories).filter(catname => Object.keys(types).includes(catname)).map(type => types[type])
        this.params.set('searchTypes', filters.join(';'))
      }
      return this
    }

    function tags(tags) {
      this.params.set('tags', tags.join(';'))
      return this
    }

    function newest(){
      this.params.delete('sortBy')
      this.params.delete('sortDir')
      return this
    }

    function oldest(){
      this.params.delete('sortBy')
      this.params.set('sortDir', 'Asc')
      return this
    }

    function biggest(){
      this.params.set('sortBy', 'Size')
      this.params.delete('sortDir')
      return this
    }

    function smallest(){
      this.params.set('sortBy', 'Size')
      this.params.set('sortDir', 'Asc')
      return this
    }

    function mostPopular(){
      this.params.set('sortBy', 'Downloads')
      this.params.delete('sortDir')
      return this
    }

    function leastDownloaded(){
      this.params.set('sortBy', 'Downloads')
      this.params.set('sortDir', 'Asc')
      return this
    }

    function mostQuestions(){
      this.params.set('sortBy', 'Questions')
      this.params.delete('sortDir')
      return this
    }

    function leastQuestions(){
      this.params.set('sortBy', 'Questions')
      this.params.set('sortDir', 'Asc')
      return this
    }

    function maxMB(mb){
      this.params.set('size', mb)
      return this
    }

    function notContains(options){
      const types = {
        audio: 'Image',
        video: 'Video',
        images: 'Audio',
        text: 'Text'
      }

      const shownCategories = Object.fromEntries(Object.entries(options).filter(([, showCategory]) => showCategory === true))
      const filters = Object.keys(shownCategories).filter(catname => Object.keys(types).includes(catname)).map(type => types[type])

      this.params.set('excludedTypes', filters.join(';'))
      return this
    }

    async function page(page){
      this.params.set('page', page)
      const result = await fetchPacks(this.params)
      result.next = this.page.bind(this, page+1)
      result.back = this.page.bind(this, page-1)
      return result
    }

    return {
      params: new URLSearchParams(),

      search,
      tags,
      newest,
      oldest,
      mostPopular,
      leastDownloaded,
      mostQuestions,
      leastQuestions,
      biggest,
      smallest,
      maxMB,
      notContains,
      page
    }
  }
}

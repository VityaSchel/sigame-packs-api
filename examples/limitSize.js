import SIGamePacksAPI from '../index.js'
const api = new SIGamePacksAPI()

api.query()
  .search('пакет',
    { name: true, themes: true, rounds: true, questions: true, answers: true, comments: true, authors: true,
      posterID: true, date: true })
  .newest()
  .maxMB(10)
  .page(1)
  .then(packs => packs.forEach(pack => console.log(pack.getName())))

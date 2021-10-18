import SIGamePacksAPI from '../index.js'
const api = new SIGamePacksAPI()

api.query()
  .search('пакет')
  .newest()
  .page(1)
  .then(packs => packs.forEach(pack => console.log(pack.getName())))

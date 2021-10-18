import SIGamePacksAPI from '../index.js'
const api = new SIGamePacksAPI()

api.query()
  .biggest()
  .page(1)
  .then(packs => packs.forEach(pack => console.log(pack.getName())))

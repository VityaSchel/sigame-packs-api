import SIGamePacksAPI from '../index.js'
const api = new SIGamePacksAPI()

const result = await api.query()
  .oldest()
  .page(1)
  .then(packs => packs.forEach(pack => console.log(pack.getName())))

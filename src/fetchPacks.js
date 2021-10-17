import fetch from 'node-fetch'
import htmlparser from 'node-html-parser'
import Pack from './packModel.js'

export default async function fetchPacks(page) {
  const query = new URLSearchParams({ page: 1 })
  const packsList = await fetch(`https://sigame.ru/?${query}`)
  const text = await packsList.text()
  const tree = htmlparser.parse(text)

  const scripts = tree.querySelectorAll('script')
  const dataTag = scripts.filter(script => !script.getAttribute('src'))[0]
  const data = dataTag.childNodes[0]._rawText
  const dataParsed = eval(`const window = { __NUXT__: {} }; ${data}; window.__NUXT__`)

  const packs = dataParsed.fetch[0].packs
  return packs.map(pack => new Pack(pack))
}

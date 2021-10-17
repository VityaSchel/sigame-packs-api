# SiGame.ru API wrapper

Враппер апи для сайта [sigame.ru](https://sigame.ru)

## Установка

```
$ npm i sigame-packs
```

## Использование

```
import fetchPacks from './src/fetchPacks.js'

const packs = await fetchPacks(1)
console.log(
  packs[0].getId(),
  packs[0].getName(),
  packs[0].getAuthors(),
  packs[0].getDate(),
  packs[0].getDifficulty(),
  packs[0].getPublishDate(),
  packs[0].getAuthorVKId(),
  packs[0].getFile(),
  packs[0].getRounds(),
)
```
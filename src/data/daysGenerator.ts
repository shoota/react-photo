import fs from 'fs'
import path from 'path'

import days from './days.json'

import { DaysPhotoProps } from 'components/pages/Day'

const imageDir = path.resolve(__dirname, '../../assets/days')

const getEntry = (key: string) => {
  return (days as DaysPhotoProps[]).find(e => e.date === key)
}

const generateJson = () => {
  const images: string[] = fs.readdirSync(imageDir)
  if (images.length === 0) {
    return []
  }
  return images.map(image => {
    const name = image.split('.')[0]
    const entry = getEntry(name)
    return (
      entry || {
        date: name,
        src: `assets/days/${image}`,
        title: '',
        hasPrev: true,
        hasNext: true,
      }
    )
  })
}

const json = generateJson()
  .sort((a, b) => parseInt(b.date, 10) - parseInt(a.date, 10))
  .map((e, index, array) => {
    return {
      ...e,
      ...{ hasNext: index !== array.length - 1, hasPrev: index !== 0 },
    }
  })

fs.writeFileSync(
  path.resolve(__dirname, './days.json'),
  `${JSON.stringify(json)}\r\n`,
  'utf-8'
)

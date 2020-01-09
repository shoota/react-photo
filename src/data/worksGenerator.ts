import fs from 'fs'
import path from 'path'

import works from './works.json'

import { WorkData } from 'components/pages/Works'

const imageDir = path.resolve(__dirname, '../../assets/works')

const getEntry = (key: string) => {
  return (works as WorkData[]).find(entry => entry.key === key)
}

const getWorkData = (dir: string) => {
  const worksPath = `${imageDir}/${dir}`
  const files: string[] = fs
    .readdirSync(worksPath)
    .sort((a, b) => {
      return (
        Number.parseInt(a.split('.')[0], 10) -
        Number.parseInt(b.split('.')[0], 10)
      )
    })
    .map(fileName => `assets/works/${dir}/${fileName}`)
  return (
    getEntry(dir) || {
      key: dir,
      title: '',
      content: '',
      files,
    }
  )
}

const generateJson = () => {
  const workDirs: string[] = fs.readdirSync(imageDir)
  if (workDirs.length === 0) {
    return []
  }
  return workDirs.map(dir => getWorkData(dir))
}

fs.writeFileSync(
  path.resolve(__dirname, './works.json'),
  `${JSON.stringify(generateJson())}\r\n`,
  'utf-8'
)

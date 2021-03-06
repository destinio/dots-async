import fs from 'fs-jetpack'
import path from 'path'
import { URL } from 'url'

const { pathname } = new URL(import.meta.url)
const dirname = path.dirname(pathname)
const filesPath = path.resolve(dirname, './dots')

async function getFiles() {
  const files = await fs.listAsync(filesPath)

  if (!files) {
    return []
  }

  const cleanFiles = files.filter(file => {
    const regex = /\.map$/
    return !regex.test(file)
  })

  return cleanFiles
}

async function createQuestions(filesToOverride: string[]) {
  const dots = (await getFiles()) || []

  const files = dots.filter(dot => filesToOverride.includes(dot))

  const overrides = files.map(file => {
    const fileName = file.split('.')[0]

    const question = {
      type: 'confirm',
      message: `Are you sure you want to override .${fileName}`,
      name: fileName,
      default: false,
    }

    return question
  })

  return {
    overrides: files,
    questions: overrides,
    all: dots,
  }
}

export { createQuestions }

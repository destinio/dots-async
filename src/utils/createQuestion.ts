import fs from 'fs-jetpack'
import path from 'path'

async function getFiles() {
  const { pathname } = new URL(import.meta.url)
  const dirname = path.dirname(pathname)
  const filesPath = path.resolve(dirname, './dots')

  console.log(filesPath)

  const files = await fs.listAsync(filesPath)

  if (!files) {
    console.log('hummm no files')
    return
  }

  const cleanFiles = files.filter(file => {
    const regex = /\.map$/
    return !regex.test(file)
  })

  return cleanFiles
}

async function createQuestions() {
  const files = await getFiles()

  if (!files) {
    console.log('Something went wrong with createQuestions')
    return
  }

  return files.map(file => {
    const question = {
      type: 'confirm',
      message: `Are you sure you want to override ${file}`,
      name: `${file.split('.')[0]}`,
      default: false,
    }

    return question
  })
}

export { createQuestions }

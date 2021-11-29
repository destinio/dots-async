import inquirer from 'inquirer'
import fs from 'fs-jetpack'
import path from 'path'

async function getFiles() {
  const { pathname } = new URL(import.meta.url)
  const dirname = path.dirname(pathname)
  const filesPath = path.resolve(dirname, './files')

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

async function getData() {
  const questions = await createQuestions()

  if (!questions) {
    console.log('Something went wrong with getData')
    return
  }

  const responses = await inquirer.prompt(questions)

  console.log(responses)
}

getData()

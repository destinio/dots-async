import inquirer from 'inquirer'
import { createQuestions } from './utils/index.js'
import fs from 'fs-jetpack'

async function checkCWD() {
  const cwd = process.cwd()
  return (await fs.listAsync(cwd)) || []
}

async function runApp() {
  // check DIR

  const filesToOverride = await checkCWD()

  const questions = await createQuestions(filesToOverride)

  if (!questions) {
    console.log('Something went wrong with getData')
    return
  }

  const responses = await inquirer.prompt(questions)

  console.log(responses)
}

export { runApp }

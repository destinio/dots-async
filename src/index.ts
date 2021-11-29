import inquirer from 'inquirer'
import { createQuestions } from './utils/index.js'

async function runApp() {
  const questions = await createQuestions()

  if (!questions) {
    console.log('Something went wrong with getData')
    return
  }

  const responses = await inquirer.prompt(questions)

  console.log(responses)
}

export { runApp }

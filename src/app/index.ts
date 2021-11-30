import inquirer from 'inquirer'
import { availableFiles } from '../utils/index.js'

async function runApp() {
  const af = await availableFiles()

  console.log(af)
}

export { runApp }

import inquirer from 'inquirer'
import { createQuestions } from './utils/index.js'
import fs, { list } from 'fs-jetpack'

async function checkCWD() {
  const cwd = process.cwd()
  return (await fs.listAsync(cwd)) || []
}

async function runApp() {
  // check DIR

  const filesToOverride = await checkCWD()

  const { overrides, all, questions } = await createQuestions(filesToOverride)

  const { main } = await inquirer.prompt<{ main: string[] }>([
    {
      name: 'main',
      message: 'Which dots would you like to create?',
      type: 'checkbox',
      choices: all,
    },
  ])

  const cleanFiles = main.filter(f => !overrides.includes(f))
  console.log('bad files', overrides)

  console.log(cleanFiles)
}

export { runApp }

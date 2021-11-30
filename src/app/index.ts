import inquirer from 'inquirer'
import { pkgInfo, availableFiles } from '../utils/index.js'
import fs from 'fs-jetpack'

async function runApp() {
  console.log(await availableFiles())

  // const { overrides, all, questions } = await createQuestions(filesToOverride)

  // const { main } = await inquirer.prompt<{ main: string[] }>([
  //   {
  //     name: 'main',
  //     message: 'Which dots would you like to create?',
  //     type: 'checkbox',
  //     choices: all,
  //   },
  // ])

  // const cleanFiles = main.filter((f) => !overrides.includes(f))
  // console.log('bad files', overrides)

  // console.log(cleanFiles)
}

export { runApp }

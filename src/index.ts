import inquirer from 'inquirer'
import { createQuestions, pkgInfo } from './utils/index.js'
import fs from 'fs-jetpack'

async function runApp() {
  // const filesToOverride = await pkgUtils.checkCWD()
  console.log(await pkgInfo())

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

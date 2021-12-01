import chalk from 'chalk'
import inquirer from 'inquirer'
import { files } from '../utils/index.js'
import clear from 'clear-any-console'

async function runApp() {
  clear()

  const af = await files.availableFiles()
  const choices = af.map((f) => f.fileRaw)

  const { main } = await inquirer.prompt<{ main: string[] }>([
    {
      type: 'checkbox',
      name: 'main',
      message: 'Which dotfiles would you like to create?',
      choices,
    },
  ])

  clear()

  const gtgFiles = af.filter((f) => !f.exists).map((f) => f.fileRaw)
  const existingFiles = af.filter((f) => f.exists).map((f) => f.fileRaw)

  const filesToCreate = main.filter((f) => gtgFiles.includes(f))
  const filesToConfirm = main.filter((f) => !gtgFiles.includes(f))

  console.log(chalk.greenBright('The following files will be created:'))
  try {
    await files.createFiles(filesToCreate)
  } catch (error) {
    console.log(error)
  }
  console.log(chalk.redBright('\nThe following files already exist:'))
  console.log(filesToConfirm)

  // console.log(chalk.bold.greenBright(` Creating the following files:\n`))
  // console.log(chalk.cyanBright(main))
}

export { runApp }

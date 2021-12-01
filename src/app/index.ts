import chalk from 'chalk'
import inquirer from 'inquirer'
import { files, clear } from '../utils/index.js'
import { log } from 'console'
import { confirmOverrides } from './confirmOverrides.js'
import { header } from './header.js'

async function runApp() {
  clear()

  const af = await files.availableFiles()
  const choices = af.map((f) => f.fileRaw)

  clear()
  header()
  const { main } = await inquirer.prompt<{ main: string[] }>([
    {
      type: 'checkbox',
      name: 'main',
      message: 'Which dotfiles would you like to create?\n',
      choices,
    },
  ])

  const gtgFiles = af.filter((f) => !f.exists).map((f) => f.fileRaw)
  const existingFiles = af.filter((f) => f.exists).map((f) => f.fileRaw)

  const filesToCreate = main.filter((f) => gtgFiles.includes(f))
  const filesToConfirm = main.filter((f) => !gtgFiles.includes(f))

  clear()
  header()

  if (filesToCreate.length) {
    try {
      log(chalk.cyanBright.inverse('Creating the dots...\n'))
      await files.createFiles(filesToCreate)
    } catch (error) {
      log(error)
    }
  }

  if (filesToConfirm.length) {
    const { next } = await inquirer.prompt([
      {
        type: 'rawlist',
        name: 'next',
        message: `${chalk.magentaBright.inverse(
          'You have some preexisting dotfiles?'
        )}`,
        choices: [
          {
            name: 'Override All',
            value: 'all',
          },
          {
            name: 'Override None',
            value: 'none',
          },
          {
            name: 'Review files to override',
            value: 'review',
          },
        ],
        default: 1,
      },
    ])

    clear()
    header()

    switch (next) {
      case 'all':
        await files.createFiles(filesToConfirm, { phrase: 'Overriding' })
        console.log(chalk.greenBright.bold('All done! Have a good one ✌️'))
        return
      case 'review':
        const overrides = await confirmOverrides(filesToConfirm)
        clear()
        header()
        await files.createFiles(overrides, { phrase: 'Overriding' })
        console.log(chalk.greenBright.bold('All done! Have a good one ✌️'))
        return
      case 'none':
        console.log(
          chalk.greenBright.bold('No overrides! All done! Have a good one ✌️')
        )
        return
      default:
        console.log(chalk.greenBright.bold('Have a good one ✌️'))
        break
    }
  }
}

export { runApp }

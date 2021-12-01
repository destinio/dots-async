import chalk from 'chalk'
import inquirer from 'inquirer'
import { files, clear } from '../utils/index.js'
import { log } from 'console'
import { confirmOverrides } from './confirmOverrides.js'

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

  if (filesToCreate.length) {
    try {
      log(chalk.cyanBright.inverse('Creating the dots...'))
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

    switch (next) {
      case 'all':
        console.log('all')
        break
      case 'review':
        console.log('review')
        break
      default:
        console.log('none')
        break
    }

    // await confirmOverrides(filesToConfirm)
  }
}

export { runApp }

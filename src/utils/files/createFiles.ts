import chalk from 'chalk'
import fs from 'fs-jetpack'
import { dotfiles } from './dots/index.js'

async function createFile(file: string, phrase: string) {
  console.log(chalk.cyanBright(`${phrase} ${file}`))
  const rawFileData = dotfiles.get(file)

  if (!rawFileData) {
    throw new Error('Something went wrong with createFile')
  }

  try {
    await fs.writeAsync(`${process.cwd()}/.${file}`, rawFileData)
  } catch (error) {
    console.log('THE ERROR')
    console.log(error)
  }
}

interface Options {
  phrase: string
}

async function createFiles(
  files: string[],
  options: Options = { phrase: 'Creating' }
) {
  files.forEach((file) => createFile(file, options.phrase))
  console.log('\n')
}

export { createFiles }

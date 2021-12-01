import chalk from 'chalk'
import fs from 'fs-jetpack'
import { dotfiles } from './dots/index.js'

async function createFile(file: string) {
  console.log(chalk.cyanBright(`Creating ${file}`))
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

async function createFiles(files: string[]) {
  files.forEach((file) => createFile(file))
}

export { createFiles }

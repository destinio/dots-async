import chalk from 'chalk'
import inquirer from 'inquirer'

async function confirmOverrides(choices: string[]) {
  const { overrides } = await inquirer.prompt<{ overrides: string[] }>([
    {
      name: 'overrides',
      message: `${chalk.bold.redBright(
        `Please choose which files to override:\n\nTHIS CAN NOT BE UNDONE\n\n`
      )}`,
      type: 'checkbox',
      choices,
    },
  ])

  return overrides
}

export { confirmOverrides }

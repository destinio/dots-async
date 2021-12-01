import inquirer from 'inquirer'

async function confirmOverrides(choices: string[]) {
  const { overrides } = await inquirer.prompt<{ overrides: string[] }>([
    {
      name: 'overrides',
      message: 'Please choose which files to override:',
      type: 'checkbox',
      choices,
    },
  ])

  return overrides
}

export { confirmOverrides }

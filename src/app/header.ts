import cfonts from 'cfonts'
import chalk from 'chalk'

async function header() {
  cfonts.say('dotfiles', {
    font: 'chrome',
    gradient: true,
    colors: ['#49B4DA', '#FFFFFF'],
    space: false,
  })
  console.log(chalk.magentaBright.bold(' by https://destin.io \n\n'))
}

export { header }

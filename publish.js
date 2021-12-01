#!/usr/bin/env node

import chalk from 'chalk'
import { log } from 'console'
import { exec } from 'child_process'

function clear() {
  process.stdout.write(
    process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
  )
}

;(async () => {
  clear()
  log(chalk.magentaBright.bold('Publishing to NPM'))
  exec('npm run ts:build', (error, stdout, stderr) => {
    if (!error) {
      console.log(stdout)
      exec('npm publish --access=public', (error, stdout, stderr) => {
        if (!error) {
          console.log(stdout)
        } else {
          console.error(stderr)
        }
      })
    } else {
      console.error(stderr)
    }
  })
})()

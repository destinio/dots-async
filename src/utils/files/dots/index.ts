import { aliases } from './aliases.js'
import { editorconfig } from './editorconfig.js'
import { functions } from './functions.js'
import { gitignore } from './gitignore.js'
import { prettierrc } from './prettierrc.js'
import { zshrc } from './zshrc.js'
import { gitconfig } from './gitconfig.js'
import { vimrc } from './vimrc.js'

const dotObject = {
  aliases,
  functions,
  gitignore,
  prettierrc,
  zshrc,
  editorconfig,
  gitconfig,
  vimrc,
}

const dotfiles = new Map(Object.entries(dotObject))

export { dotfiles }

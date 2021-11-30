const zshrc = `# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

include () {
    [[ -f "$1" ]] && source "$1"
}

# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
plugins=(
    zsh-autosuggestions
    zsh-syntax-highlighting
)

ZSH_DISABLE_COMPFIX=true

include $ZSH/oh-my-zsh.sh
include $HOME/.aliases
include $HOME/.functions

include /usr/local/bin/functions

export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi
`

export { zshrc }

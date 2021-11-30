const aliases = `# Aliases

alias ll='ls -al'
alias c='code .'
alias cl='clear'
alias cd..='cd ..'
# cd to created folder
alias cd!='cd !$'

# YARN
alias ys='yarn start'
alias yd='yarn dev'
alias yt='yarn test'
alias yb='yarn build'
alias yw='yarn watch'
alias y='yarn --registry https://registry.yarnpkg.com'
alias yl='yarn --registry https://registry.yarnpkg.com add'
alias yld='yarn --registry https://registry.yarnpkg.com add -D'
alias ylg='yarn global --registry https://registry.yarnpkg.com add'
alias yal='yarn upgrade --latest'

# GIT
alias g='git'
alias gaa='git add --all'

alias gb='git branch'

alias gco='git checkout -'
alias gcob='git checkout -b'
alias gcom='git checkout main'

alias gc='git commit -v'
alias gcm='git commit -m'
alias gcma='git commit -a -m'

alias gpoh='git push origin head'

alias gpull='git pull'

alias gst='git status'

alias gs='git stash'
alias gspop='git stash pop'

# NPM
alias npmv='npm version'
alias npmvp='npm version patch'
alias npmvmin='npm version minor'
alias npmvm='npm version major'
alias npmp='npm publish'
alias npmpp='npm publish --access public'

# NPX
alias gi='npx add-gitignore'


# CLEAN UP NODE MODS
alias fnm='find . -name "node_modules" -type d -prune | xargs du -chs'
# DNM = DELETE NODE MODULES - in current DIR
alias dnm='find . -name "node_modules" -type d -prune -exec rm -rf '{}' +'

# TO SORT
# alias gc!='git commit -v --amend'
# alias gca!='git commit -v -a --amend'
`

export { aliases }

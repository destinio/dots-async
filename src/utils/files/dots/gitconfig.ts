const gitconfig = `[core]
  editor = vim
  whitespace = fix,-indent-with-non-tab,trailing-space,cr-at-eol
  excludesFile = ~/.gitignore

[alias]
# Handled in aliases

[color]
  ui = true
  branch = auto
  diff = auto
  status = auto
  showbranch = auto

[color "status"]
  header = 255
  added = green bold
  changed = red bold
  untracked = 45
  branch = 11 bold ul

[color "branch"]
  current = yellow reverse bold
  local = yellow
  remote = green bold

[color "diff"]
  meta = yellow bold
  frag = magenta bold
  old = red bold
  new = green bold
  whitespace = red reverse

[diff]
  tool = vimdiff

[pull]
  rebase = false

[log]
  date = short

[filter "lfs"]
  clean = git-lfs clean -- %f
  smudge = git-lfs smudge -- %f
  process = git-lfs filter-process
  required = true

[init]
  defaultBranch = main
`

export { gitconfig }

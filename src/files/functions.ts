const functions = `
# mk makes and dir and changes you to it
function mk {
  if [[ -z $1 ]]; then
    echo 'Please enter a dir name'
  else
    echo 📦 Creating $1
    mkdir $1
    until [ -d $1 ]; do sleep 0.1; done
    echo 🚀 Changing to $1
    cd $1
    echo 😎 have fun in $1
  fi
}
`

export { functions }

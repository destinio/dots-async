import fs from 'fs-jetpack'

async function availableFiles() {
  console.log(await fs.listAsync('./dots'))
}

export { availableFiles }

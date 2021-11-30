import fs from 'fs-jetpack'
import { pkgInfo, getCurrentDir } from '../pkgInfo/index.js'

async function availableFiles() {
  const { files: allFiles } = await getCurrentDir(import.meta.url, '../dots')

  const files = allFiles
    ?.filter((f) => {
      return !f.includes('map') && !f.includes('index')
    })
    .map((f) => f.split('.')[0])
  return files
}

export { availableFiles }

import fs from 'fs-jetpack'
import { getCurrentPkgDirInfo } from '../pkgInfo/index.js'

interface FileAvailability {
  fileRaw: string
  fileDot: string
  exists: boolean
}

/**
 *
 * @returns Promise Array with FileAvailability name and if it exists
 */
async function availableFiles(): Promise<FileAvailability[]> {
  const { files: allFiles } =
    (await getCurrentPkgDirInfo(import.meta.url, '../dots')) || []

  const cwdFiles = (await fs.listAsync('.')) || []

  return allFiles
    .filter((f) => {
      return !f.includes('map') && !f.includes('index')
    })
    .map((f) => f.split('.')[0])
    .map((f) => {
      return {
        fileRaw: f,
        fileDot: `.${f}`,
        exists: cwdFiles.includes(f),
      }
    })
}

/**
 * 
 * 

  const gtgFiles = availableFiles.map((f) => {
    const dotFileName = `.${f}`
    return {
      file: dotFileName,
      exists: cwdFiles.includes(dotFileName),
    }
  })
 * 
 */

export { availableFiles }

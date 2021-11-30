import fs from 'fs-jetpack'
import path from 'path'

async function pkgInfo() {
  const fileURL = import.meta.url
  const cwd = process.cwd()
  const pkgRoot = path.join(fileURL, '../../../../').split(':')[1]

  const paths = {
    cwd: {
      path: cwd,
      files: (await fs.listAsync(cwd)) || [],
    },
    pkgRoot,
  }

  return paths
}

async function getCurrentPkgDirInfo(url: string, extraPaths = '../') {
  const cwd = path.join(url, extraPaths).split(':')[1]
  const dirInfo = {
    cwd,
    files: (await fs.listAsync(cwd)) || [],
  }
  return dirInfo
}

export { pkgInfo, getCurrentPkgDirInfo }

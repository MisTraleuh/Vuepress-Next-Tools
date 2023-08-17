const fs = require('fs');
const parsePosFile = require('./parsePosFile.js')
const parseDirecory = require('./parseDirectory.js')

/**
 *
 * @param {string} path
 * @returns array of directories in path
 * */
function listDirectories (path) {
    return fs.readdirSync(path).filter(file => fs.statSync(`${path}/${file}`).isDirectory())
}

/**
 *
 * @param {string} path
 * @returns array of *.md in path
 */
function listMdFiles (path) {
    const files = []
    const filesInDirectory = fs.readdirSync(path)
    filesInDirectory.forEach(file => {
        if (fs.statSync(`${path}/${file}`).isFile() && file.endsWith('.md')) {
            files.push(`${path}/${file}`)
        }
    })
    return files
}

/**
  *
  * @param {string} path
  * @returns array of object {type: 'file' or 'directory', name: 'name'}
  */
function listAll (path) {
    const all = []
    const directories = listDirectories(path)
    const files = listMdFiles(path)
    let pos = 0
    for (const file of files) {
        pos = parsePosFile.parsePosFile(file)
        if (pos === -1) {
        continue
        }
        if (all[pos] !== undefined) {
        console.error(`File Error: ${file} got same pos as ${all[pos].name}`)
        for (let i = 0; i < all.length; i++) {
            if (all[i] === undefined) {
                    all[i] = { name: file, type: 'file' }
                break
              }
          }
        } else {
          all[pos] = { name: file, type: 'file' }
        }
    }
    for (const directory of directories) {
      if ((listDirectories(`${path}/${directory}`).length > 0 || listMdFiles(`${path}/${directory}`).length > 0) && directory !== '.git') {
        pos = parseDirecory.parsePosDirectory(`${path}/${directory}`)
        if (all[pos] !== undefined) {
          console.error(`\x1b[31m\x1b[1mDirectory Error: ${path}/${directory} got same pos as ${all[pos].name} \x1b[0m`)
          for (let i = 0; i < all.length; i++) {
            if (all[i] === undefined) {
              all[i] = { name: directory, type: 'directory' }
              break
            }
          }
        } else {
          all[pos] = { name: directory, type: 'directory' }
        }
      }
    }
    return all
}

module.exports = {
    listDirectories,
    listMdFiles,
    listAll
}

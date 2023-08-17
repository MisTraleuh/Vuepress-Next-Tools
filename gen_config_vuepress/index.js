const fs = require('fs');
const checkOtherDirectory = require('./checkOtherDirectory.js')
const parseDirecory = require('./parseDirectory.js')
const Listing = require('./ListAnything.js')
/* eslint semi: "off" */

let pathDoc = process.argv[2]

function messageErrorExit (msg) { console.error(msg); process.exit(1) }

function checkError () {
  if (process.argv.length !== 3) {
    messageErrorExit('Usage: node index.js <path_doc>')
  }
  if (!fs.existsSync(pathDoc)) {
    messageErrorExit(`Error: ${pathDoc} not found`)
  }
}

/**
 * @param {object} tree
 * @param {string} path
 * */
function recursiveCreateTreeWithOrder (tree, path) {
  const all = Listing.listAll(path)
  tree[path] = {
    text: parseDirecory.parseNameDirectory(path),
    collapsed: true,
    children: {}
  }
  for (let i = 0; i < all.length; i++) {
    if (all[i] !== undefined) {
      if (all[i].type === 'file') {
        tree[path].children[all[i].name] = {}
        tree[path].children[all[i].name].file = all[i].name
      } else {
        recursiveCreateTreeWithOrder(tree[path].children, `${path}/${all[i].name}`)
      }
    }
  }
}

/**
 * @param {number} tab
 * @param {string} text
 * */
function writeTextWithIndentation (tab, text) {
  for (let i = 0; i < tab; i++) {
    process.stdout.write('  ')
  }
  process.stdout.write(text)
}

/**
 * @param {object} tree
 * @param {number} tab
 * @param {string} otherDirectory
 * */
function printTree (tree, tab, otherDirectory) {
  for (const key in tree) {
    if (tree[key].file !== undefined) {
      writeTextWithIndentation(tab, `\`/${tree[key].file.replace(otherDirectory, '')}\`,\n`)
    } else {
      writeTextWithIndentation(tab, '{\n')
      tab++;
      writeTextWithIndentation(tab, `text: '${tree[key].text.replace(/[_]/g, ' ')}',\n`)
      writeTextWithIndentation(tab, `collapsible: ${tree[key].collapsed},\n`)
      writeTextWithIndentation(tab, 'children: [\n')
      printTree(tree[key].children, tab + 1, otherDirectory)
      writeTextWithIndentation(tab, '],\n')
      tab--;
      writeTextWithIndentation(tab, '},\n')
    }
  }
}

function sortDirectory (allDirectory) {
  const allDirectorySorted = []
  const allDirectoryNotSorted = []
  for (const directory of allDirectory) {
    allDirectoryNotSorted.push({ name: directory, pos: parseDirecory.parsePosDirectory(`${pathDoc}/${directory}`) })
  }
  allDirectoryNotSorted.sort((a, b) => { return a.pos - b.pos })
  allDirectoryNotSorted.forEach((directory) => { allDirectorySorted.push(directory.name) })
  return allDirectorySorted
}

function main () {
  checkError()
  if (pathDoc.endsWith('/')) {
    pathDoc = pathDoc.substring(0, pathDoc.length - 1)
  }
  const otherDirectory = checkOtherDirectory(pathDoc)
  const tree = {}
  const allDirectory = sortDirectory(Listing.listDirectories(pathDoc))
  for (const directory of allDirectory) {
    recursiveCreateTreeWithOrder(tree, `${pathDoc}/${directory}`)
  }
  process.stdout.write(
`module.exports = {
  sidebar: {
    '/${pathDoc.split('/').pop()}/': [
`)
  printTree(tree, 3, otherDirectory)
  console.log(
`    ],
  },
}
`)
  process.exit(0)
}

main()

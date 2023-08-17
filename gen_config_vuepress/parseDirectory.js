const fs = require('fs')

function messageErrorExit (msg) { console.log('\x1b[31m\x1b[4m' + msg + '\n\x1b[35mKO\x1b[0m'); process.exit(1) }

function parseNameDirectory (name) {
    const realName = name.split('/').pop()
    if (realName === undefined) {
      messageErrorExit(`Error Directory: ${name} bad name !\nExemple: name`)
    }
    return realName
}

function parseNameDirectoryTest (name) {
    const realName = name.split('/').pop()
    if (realName === undefined) { return "false" }
    return realName
}

function parsePosDirectory (name) {
  if (!fs.existsSync(`${name}/pos`)) {
    messageErrorExit(`Error Directory: ${name} no pos file !`)
  }
  const pos = fs.readFileSync(`${name}/pos`, 'utf8')
  if (isNaN(parseInt(pos))) {
    messageErrorExit(`Error Directory: ${name} bad name !\nExemple: 1, 2, 3`)
  }
  return parseInt(pos)
}

function parsePosDirectoryTest (name) {
    const pos = name.split('/').pop().split('.')[0]
    if (isNaN(parseInt(pos))) {
      return "false"
    }
    return parseInt(pos)
  }

module.exports = {
    parseNameDirectory,
    parsePosDirectory,
    parseNameDirectoryTest,
    parsePosDirectoryTest
}

const checkValid = require("./checkValid.js")
const fs = require('fs');

let ifNoPos = 999

function messageWarning (msg) { console.log('\x1b[33m\x1b[1m' + msg + '\x1b[0m') }

function parsePosFile (file) {
  const inFile = fs.readFileSync(file, 'utf8').split('\n')
  let pos = -99
  let valide = 0
  for (let i = 0; i < inFile.length; i++) {
    if (inFile[i] === '---' && ++valide === 2) {
      break
    }
    if (inFile[i].startsWith('pos:')) {
      pos = parseInt(inFile[i].split(':')[1])
    }
  }
  if (pos === -99) {
    messageWarning(`Warning: ${file} pos header not found, file ignored`)
  }
  if (valide === 2 && pos !== -99) {
    return checkValid.checkValid(parseInt(pos, file))
  } else {
    messageWarning(`Warning: ${file} missing header !`)
    return ifNoPos++;
  }
}

function parsePosFileTest (file) {
  const inFile = fs.readFileSync(file, 'utf8').split('\n')
  let pos = -99
  let valide = 0
  for (let i = 0; i < inFile.length; i++) {
    if (inFile[i] === '---' && ++valide === 2) {
      break
    }
    if (inFile[i].startsWith('pos:')) {
      pos = parseInt(inFile[i].split(':')[1])
    }
  }
  if (valide === 2 && pos !== -99) {
    return checkValid.checkValid(parseInt(pos, file))
  } else {
    return ifNoPos++;
  }
}

module.exports = {
    parsePosFile,
    parsePosFileTest,
}
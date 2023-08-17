function messageErrorExit (msg) { console.log('\x1b[31m\x1b[4m' + msg + '\n\x1b[35mKO\x1b[0m'); process.exit(1) }

function checkValid (pos, file) {
    if (isNaN(pos)) { messageErrorExit(`Error: ${file} bad format ! ${pos} is not a number`) }
    if (pos < 0) { messageErrorExit(`Error: ${file} bad format ! ${pos} is negative position`) }
    return pos
}

function checkValidTest (pos) {
    if (isNaN(pos)) { return "false" }
    if (pos < 0) { return "false" }
    return pos
}

module.exports = { checkValid, checkValidTest }
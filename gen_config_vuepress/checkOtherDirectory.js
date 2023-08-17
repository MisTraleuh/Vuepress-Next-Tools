function checkOtherDirectory (path) {
    let otherDirectory = ""
    if (path.includes('/')) {
      let others = path.split('/')
      for (let i = 0; i < others.length - 1; i++) {
        otherDirectory += others[i] + '/'
      }
    }
    return otherDirectory
}

module.exports = checkOtherDirectory
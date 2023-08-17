const { execSync } = require('child_process');
const fs = require('fs');

let filesUnused = []
let filesUnusedNames = []

function readFilesUnused(path) {
    let files = fs.readdirSync(path).forEach(file => {
        let pathFile = path + '/' + file
        if (fs.statSync(pathFile).isDirectory()) {
            readFilesUnused(pathFile)
        } else if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.backup')) {
            filesUnused.push(pathFile)
        }
    })
}

function deleteFilesUnused(path) {
    let files = fs.readdirSync(path).forEach(file => {
        let pathFile = path + '/' + file
        if (fs.statSync(pathFile).isDirectory()) {
            deleteFilesUnused(pathFile)
        } else if (file.endsWith(".md")) {
            let content = fs.readFileSync(pathFile, 'utf8')
            for (let i = 0; i < filesUnusedNames.length; i++) {
                if (content.includes(filesUnusedNames[i])) {
                    filesUnused.splice(i, 1)
                    filesUnusedNames.splice(i, 1)
                    i--
                }
            }
        }
    })
}

function main(path) {
    console.log('\x1b[32mStart clean repo\x1b[0m')
    readFilesUnused(path)
    console.log(`\x1b[33mFiltering of ${filesUnused.length} files\x1b[0m`)
    let save = filesUnused
    filesUnusedNames = filesUnused.map(file => file.split('/').pop())
    deleteFilesUnused(path)
    console.log(`\x1b[33mDeleting of ${filesUnused.length} files\x1b[0m`)
    save.forEach(file => {
        execSync(`rm ${file}`)
    })
    console.log(`\x1b[32mClean Ok\x1b[0m`)
}

if (process.argv.length < 3) {
    console.log("Please provide a path to the directory to clean")
    process.exit(1)
}

main(process.argv[2])
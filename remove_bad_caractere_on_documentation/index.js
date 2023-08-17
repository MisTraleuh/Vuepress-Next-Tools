const fs = require('fs');

if (process.argv.length < 3 || !fs.existsSync(process.argv[2])) {
    console.log('Usage: node index.js ');
    process.exit(1);
}

function readDirRecursive(path)
{
    fs.readdirSync(path).forEach((directory) => {
        const fullPath = `${path}/${directory}`;
        let stats = fs.statSync(fullPath).isDirectory();
        let search = (stats || directory.endsWith(".md"));
        
        let newPath = directory.replace(/[!@#$%^&*é()+-={};:'",\.?\\|~\`\[\] ]/g, stats ? '_' : '-').replace("&#39;", stats ? '_' : '-');
        if (!stats && directory.endsWith(".md")) {
            fs.renameSync(fullPath, `${path}/${newPath.slice(0, -3)}.md`);
        }
        if (stats) {
            readDirRecursive(`${path}/${directory}`);
        }
    });
}

function checkError(path)
{
    fs.readdirSync(path).forEach((directory) => {
        const fullPath = `${path}/${directory}`;
        let stats = fs.statSync(fullPath).isDirectory();

        if (stats) {
            checkError(`${path}/${directory}`);
        } else if (directory.includes('!') || directory.includes('@') || directory.includes('#') || directory.includes('$') || directory.includes('%') || directory.includes('^') || directory.includes('&') || directory.includes('*') || directory.includes('(') || directory.includes(')') || directory.includes('+') || directory.includes('=') || directory.includes('{') || directory.includes('}') || directory.includes(';') || directory.includes(':') || directory.includes("'") || directory.includes('"') || directory.includes(',') || directory.includes('?') || directory.includes('\\') || directory.includes('|') || directory.includes('~') || directory.includes('`') || directory.includes('[') || directory.includes(']') || directory.includes(' ')) {
            console.log(`Error: ${directory}`);
            process.exit(1);
        }
    });
}

readDirRecursive(process.argv[2]);
checkError(process.argv[2]);
console.log('Done');
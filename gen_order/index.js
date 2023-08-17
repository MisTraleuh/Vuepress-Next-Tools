const fs = require('fs');

function messageErrorExit(message) { console.log(message); process.exit(1)}

function check_error(argc, argv)
{
    if (argc != 3) { messageErrorExit("Usage: node index.js ") }
    if (!fs.existsSync(argv[2])) { messageErrorExit("File does not exist") }
}

function readdirSyncRec(path, tree)
{
    const files = fs.readdirSync(path);

    tree[path] = {
        children: {},
    };  
    for (let i = 0; i < files.length; i++) {
        const filePath = path + '/' + files[i];
        if (fs.statSync(filePath).isDirectory()) {
            readdirSyncRec(filePath, tree[path].children);
        } else if (fs.statSync(filePath).isFile() && files[i].endsWith(".md")) {
            tree[path].children[filePath] = {
                file: filePath,
            };
        }
    }
}

/**
 * @param {object} tree
 * */
function printTree (tree) {
    let i = 0;
    for (const key in tree) {
        if (tree[key].file !== undefined) {
            fs.writeFileSync(tree[key].file, `---\npos: ${i++}\n---\n${fs.readFileSync(tree[key].file, 'utf8')}`);
            console.log(`\x1b[32m${tree[key].file}\x1b[0m appendend with pos: ${i - 1}`);
        } else {
            printTree(tree[key].children);
        }
    }
}

/**
 * 
 * @param {object} o 
 * @returns {object} sorted object by key on alphabetical order
 */
function sortObject(o) { return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {}) }

function sortMyTree(tree)
{
    for (const key in tree) {
        if (tree[key].file === undefined) {
            sortMyTree(tree[key].children);
            tree[key].children = sortObject(tree[key].children);
        }
    }
}

function main(argc, argv)
{
    check_error(argc, argv);
    const tree = {};
    readdirSyncRec(argv[2], tree);
    sortMyTree(tree);
    printTree(tree);
}

main(process.argv.length, process.argv);
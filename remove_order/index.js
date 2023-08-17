const fs = require('fs');

function messageErrorExit(message)
{
    console.log(`\x1b[31m${message}\x1b[0m`);
    process.exit(1);
}

function check_error(argc, argv)
{
    if (argc != 3) { messageErrorExit("Usage: node index.js directory") }
    if (!fs.existsSync(argv[2])) { messageErrorExit("Directory does not exist") }
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

function remove_3lines(file)
{
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    lines.splice(0, 3);
    fs.writeFileSync(file, lines.join('\n'));
}

function printTree (tree) {
    let i = 0;
    for (const key in tree) {
        if (tree[key].file !== undefined) {
            remove_3lines(tree[key].file);
            console.log(`\x1b[32m${tree[key].file}\x1b[0m removed`);
        } else {
            printTree(tree[key].children);
        }
    }
}

function main(argv, argc)
{
    check_error(argc, argv);
    const tree = {};
    readdirSyncRec(argv[2], tree);
    printTree(tree);
}

main(process.argv, process.argv.length);
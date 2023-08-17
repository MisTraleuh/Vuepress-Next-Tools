const fs = require('fs');

const UpperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
const Numbers = '0123456789';
const Special = `!@#$%^&*()_+-=[]{};:'",.?\\|~\` `;

function randomString(length)
{
    let result = '';
    const characters = UpperAlpha + LowerAlpha + Numbers + Special;
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function main(Depth, path)
{
    console.log(`Depth: ${Depth}, path: ${path}`);
    if (Depth > 0) {
        const nb = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < nb; i++) {
            const newPath = path + '/' + randomString(10);
            fs.mkdirSync(newPath);
            const nbFile = Math.floor(Math.random() * 35) + 1;
            for (let j = 0; j < nbFile; j++) {
                const newFile = newPath + '/' + randomString(10) + '.md';
                fs.writeFileSync(newFile, randomString(100));
            }
            main(Depth - 1, newPath);
        }
    }
}

main(Math.floor(Math.random() * (10 - 5 + 1) + 5), `${process.cwd()}/tests`);
console.log('Done');
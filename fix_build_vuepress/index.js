const exec = require('child_process');
const fs = require('fs');
const { chdir, exit } = require('process');

function parseError(error)
{
    if (error.includes("[vite:asset]")) {
        const filePathError = "docs/" + error.split("imported by ")[1].split("):")[0].split("/").slice(4).join("/").replace("html.vue", "md");
        const realMsg = error.split("\n")[1]
        const PathToMoove = realMsg.split(" ")[4].split("/").slice(0, -1).join("/") + "/";
        const file = realMsg.split(" ")[4].split("/").slice(-1)[0];

        console.log('Copie of ' + file + ' in ' + PathToMoove);
        exec.exec(`cp $(find . -name "${file}") ${PathToMoove}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: try to the file...`);
                const contentFile = fs.readFileSync(filePathError, 'utf8').split("\n")
                let newContentFile = "";
                for (let i = 0; i < contentFile.length; i++) {
                    if (!contentFile[i].includes(file)) {
                        newContentFile += contentFile[i] + "\n";
                    }
                }
                fs.writeFileSync(filePathError, newContentFile);
                console.log(`\x1b[32m\x1b[1mError fixed\x1b[0m`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`\x1b[32m\x1b[1mMoove : ok\x1b[0m`);
        });
    } else if (error.includes("Compiling with vite - done")) {
        console.log('\x1b[32m\x1b[1mBuild Finished Successfuly\x1b[0m')
        exit(0);
    } else {
        console.log(error);
        console.log('\x1b[31m\x1b[1mError ! Not assets error !\x1b[0m')
    }
}

function main()
{
    exec.exec("npm run docs:build", (error, stdout, stderr) => {
        if (stderr) {
            parseError(stderr);
            main();
        }
    })
}

if (process.cwd().slice(-18) !== "fix_build_vuepress") {
    console.log("\x1b[31mPlease run this script in the stage_build_doc directory");
    process.exit(1);
}
chdir("..");
main();
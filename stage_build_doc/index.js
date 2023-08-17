const exec = require('child_process')

function main()
{
    let inRender = 0
    const child = exec.exec(`export NODE_OPTIONS="--max-old-space-size=8192" && npm run docs:build`);
    child.stdout.on('data', (data) => {
        if (!inRender) {
            console.log(data);
        }
    });
    child.stderr.on('data', (data) => {
        if (data.includes("✔ Compiling with vite - done")) {
            console.log('\x1b[32m\x1b[1mBuild Finished Successfuly\x1b[0m')
            console.log('\x1b[32m\x1b[1mRendering...\x1b[0m')
            process.kill(child.pid);
            render();
        }
        console.log(data);
    });
    render = () => {
        let childRender = exec.exec(`npm run docs:dev`);
        
        childRender.stdout.on('data', (data) => {
            if (data.includes("server running at:")) {
                console.log('\x1b[32m\x1b[1mRender Finished Successfuly\x1b[0m')
                childRender.kill();
                process.exit(0);
            }
            console.log(data);
        })
    }
}

if (process.cwd().split("/").pop() !== "stage_build_doc") {
    console.log("\x1b[31mPlease run this script in the stage_build_doc directory")
    process.exit(1)
}

process.chdir("..")
main()
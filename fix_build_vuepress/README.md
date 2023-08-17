# 🧵 Fix Build Vuepress

## ⚡ Installation | Prerequisites

* [Node.js](https://nodejs.org) (version >= 18.4.0)

## 📝 Description

This script is used to fix the build of Vuepress with **assets** or **unused assets** on *path*.
You can got any error, then launch too this script [here](../../remove_bad_caractere_on_documentation/)

```js
$ pwd
~/New_documentation/
$ npm run docs:build

> New_documentation@1.0.0 docs:build
> vuepress build docs

info Initializing VuePress and preparing data...
⠧ Compiling with vite[vite:asset] Could not load ~/New_documentation/assrtsd123.png (imported by docs/.vuepress/.temp/pages/guide/value.html.vue): ENOENT: no such file or directory, open '~/New_documentation/docs/guide/assrtsd123.png'
✖ Compiling with vite - failed
Error: Could not load ~/New_documentation/assrtsd123.png (imported by docs/.vuepress/.temp/pages/guide/value.html.vue): ENOENT: no such file or directory, open '~/New_documentation/docs/guide/assrtsd123.png'
```

## 🎁 Example of use

```bash
$ git clone https://github.com/MisTraleuh/Vuepress-Next-Tools.git
$ cd Vuepress-Next-Tools/fix_build_vuepress
$ npm i
$ node index.js
Success
$ cd ..
$ npm run docs:build

> New_documentation@1.0.0 docs:build
> vuepress build docs

info Initializing VuePress and preparing data...
✔ Compiling with vite - done
✔ Rendering pages - done
success VuePress build successfully!
```

## ⚠️ Possible errors

* Sometimes, the script can't find the path of the assets -> `KO`
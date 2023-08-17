# 🔦 Remove bad caractere on documentation
## ⚡ Installation | Prerequisites

* [Node.js](https://nodejs.org) (version >= 18.4.0)

## ⁉️ Create a order

```bash
$ cd remove_bad_caractere_on_documentation
$ npm i
$ node index.js 
```

## 🎁 Example of use

```bash
$ git clone https://github.com/MisTraleuh/Vuepress-Next-Tools.git
$ cd Vuepress-Next-Tools/remove_bad_caractere_on_documentation
$ npm i
$ ls tests/tests
    0CqrlnVcD-  ODWsg3zsPO
$ node index.js ./tests/tests
Done
$ ls tests/tests
    _CqrlnVcD_  ODWsg_zsPO
```

## ⚠️ Possible errors

* The space is not found or is not a directory -> ` is not a directory`
* Not enough permissions -> ` is not readable`
* If any error got, the documentation order is not removed-> `KO` (Never got to this point)
# 📊 Generation sidabar

## 🔥 Prerequisites

* [Node.js](https://nodejs.org) (version >= 18.4.0)

## ✨ Installation

```bash
$ npm i
```

**Installation** of **dependencies necessary** for the *script* .

## 🪄 Start

```bash
$ node index.js 
```

## 💖 Example of use

```bash
$ git clone https://github.com/MisTraleuh/Vuepress-Next-Tools.git
$ cd Vuepress-Next-Tools/gen_config_vuepress
$ npm i
 Insallaing dependencies... 

added 213 packages, and audited 214 packages in 1s

77 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
 Dependencies installed
$ node index.js guide/ got.js
Success !
$ cat got.js
module.exports = {
    sidebar: {
      '/test01/': [
        {
            text: 'Tropical',
            collapsible: true,
            children: [
                {
                    text: 'Mayo',
                    collapsible: true,
                    children: [
                        'for_u.md',
                    ],
                },
                'index.md',
            ],
        },
        {
            text: 'Abricot',
            collapsible: true,
            children: [
                'ketchup.md',
            ],
        },
      ],
    },
}

```
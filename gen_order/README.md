# 💫 Generation Order

## ⚡ Installation | Prerequisites

* [Node.js](https://nodejs.org) (version >= 18.4.0)

## ⁉️ Create a order

**__This script is used to generate the order of the documentation on the alphabetical order of the files.__**

```bash
$ cd gen_order
$ npm i
$ node index.js 
```

## 🎁 Example of use

```bash
$ git clone https://github.com/MisTraleuh/Vuepress-Next-Tools.git
$ cd Vuepress-Next-Tools/gen_order
$ npm i
$ node index.js ~/New-documentation/
~/New-documentation/Prise en main/Demander-et-enregistrer-une-licence-Pass.md appendend with pos: 3
~/New-documentation/Prise en main/Le-Pass-dans-le-cloud.md appendend with pos: 4
~/New-documentation/Prise en main/Le-Pass-sur-machine-physique.md appendend with pos: 5
~/New-documentation/Prise en main/Le-Pass-sur-machine-virtuelle.md appendend with pos: 6
~/New-documentation/Prise en main/Support-Contact.md appendend with pos: 7
~/New-documentation/Prise en main/index.md appendend with pos: 8
~/New-documentation/Prise-en-main.md appendend with pos: 1
~/New-documentation/index.md appendend with pos: 2
```

## ⚠️ Possible errors

* The space is not found or is not a directory -> ` is not a directory`
* Not enough permissions -> ` is not readable`
* If any error got, the documentation order is not generated -> `KO` (Never got to this point)

## 😨 Troubleshooting

> **If you do this all *.md are modified**, for remove the order, go here: [remove_order](../remove_order/)
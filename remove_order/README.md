# 🗑️ Remove Order

## ⚡ Installation | Prerequisites

* [Node.js](https://nodejs.org) (version >= 18.4.0)

## ⁉️ Create a order

```bash
$ cd gen_order
$ npm i
$ node index.js 
```

## 🎁 Example of use

```bash
$ git clone https://github.com/MisTraleuh/Vuepress-Next-Tools.git
$ cd Vuepress-Next-Tools/remove_order
$ npm i
$ node index.js ~/doc_vuepress/docs/guide/
~/doc_vuepress/docs/guide/Prise en main/Demander-et-enregistrer-une-licence-PASS.md removed
~/doc_vuepress/docs/guide/Prise en main/Le-PASS-dans-le-cloud.md removed
~/doc_vuepress/docs/guide/Prise en main/Le-PASS-sur-machine-physique.md removed
~/doc_vuepress/docs/guide/Prise en main/Le-PASS-sur-machine-virtuelle.md removed
~/doc_vuepress/docs/guide/Prise en main/Support-PASS---Contact.md removed
~/doc_vuepress/docs/guide/Prise en main/index.md removed
~/doc_vuepress/docs/guide/Prise-en-main.md removed
~/doc_vuepress/docs/guide/index.md removed
```

## ⚠️ Possible errors

* The space is not found or is not a directory -> ` is not a directory`
* Not enough permissions -> ` is not readable`
* If any error got, the documentation order is not removed-> `KO` (Never got to this point)

## 😨 Troubleshooting

> If you do this all *.md are modified, for add the order, go here: [gen_order](../gen_order/)
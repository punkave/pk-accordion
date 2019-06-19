# pk-module-boilerplate

A starting point for new `pk-` modules (to be used as Apostrophe modules in client projects).

## Dependencies

[pk-webpack](https://github.com/punkave/pk-webpack): You'll find configuration for this in `/lib/webpack-dev.js` and `/lib/webpack-prod.js`

pk-utils (TBD)

## Getting started

```
# Clone this repo:
$ git clone --depth=1 https://github.com/punkave/pk-module-boilerplate.git MYMODULE
# Then remove git refs:
$ rm -rf !$/.git
# Then init and commit:
$ cd MYMODULE
$ git init
$ git add -A
$ git commit -m "Initial commit generated from module boilerplate"
$ git remote add origin https://github.com/punkave/REPO-NAME.git
$ git push -u origin master
```

`npm run dev` will watch/compile js and css.

Be sure to update name, etc in `package.json`

TODO: Add cli tools for initing (and auto-generating index.js)

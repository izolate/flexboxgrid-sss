const fs = require('fs')
const postcss = require('postcss')
const sugarss = require('sugarss')
const cssImport = require('css-import')

const CSS_PATH = './node_modules/flexboxgrid/dist/flexboxgrid.css'

function saveFile (sss) {
  return new Promise((yep, nope) => {
    fs.writeFile('flexboxgrid.sss', sss, err => {
      if (err) return nope('Error converting CSS to SugarSS')
      else return yep('Operation successful.')
    })
  })
}

cssImport(CSS_PATH, (err, css) => {
  if (err) throw new Error(err)

  postcss()
    .process(css, { stringifier: sugarss })
    .then(compiled => saveFile(compiled.content))
    .then(result => console.log(result))
    .catch(err => console.error(err))
})


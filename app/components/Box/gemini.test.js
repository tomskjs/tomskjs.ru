const gemini = require('gemini')

gemini.suite('Box', suite => {
  suite.setUrl('/')
    .setCaptureElements('[data-gemini="box"]')
    .capture('plain')
})

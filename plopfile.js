const componentGenerator = require('./plop/component/prompt.js')
const storeGenerator = require('./plop/store/prompt.js')
const pageGenerator = require('./plop/page/prompt.js')

module.exports = function (plop) {
  plop.setHelper('upperCase', str => str ? str.toUpperCase() : str)
  plop.setHelper('camelCase', (str) => {
    if (!str) return str
    // upper case first letter only
    return `${str[0].toUpperCase()}${str.slice(1)}`
  })
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('store', storeGenerator)
  plop.setGenerator('page', pageGenerator)
}

import componentGenerator from './plop/component/prompt.js'
import storeGenerator from './plop/store/prompt.js'
import pageGenerator from './plop/page/prompt.js'

export default (plop) => {
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

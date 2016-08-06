/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const curry       = require('../funcs/curry')
const isFunction  = require('../internal/isFunction')

// chain :: Chain m => (a -> m b) -> m a -> m b
function chain(fn, m) {
  if(!isFunction(fn)) {
    throw new TypeError('chain: Function required for first arg')
  }

  if(!(m && isFunction(m.chain))) {
    throw new TypeError('chain: Chain of the same type required for second arg')
  }

  return m.chain(fn)
}

module.exports = curry(chain)

/**
 * React utility for SUGOS
 * @module sg-react
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get mount () { return d(require('./mount')) },
  get once () { return d(require('./once')) }
}

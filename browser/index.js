/**
 * React utility for SUGOS
 * @module sg-react
 */

'use strict';

var d = function d(module) {
  return module.default || module;
};

module.exports = {
  get mount() {
    return d(require('./mount'));
  }
};
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
  },
  get once() {
    return d(require('./once'));
  }
};
//# sourceMappingURL=data:application/json;base64,bnVsbA==
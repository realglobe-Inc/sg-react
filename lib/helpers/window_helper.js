/**
 * Helper for window
 * @module WindowHelper
 */
'use strict'

/** @lends WindowHelper */
module.exports = Object.assign(exports, {
  /**
   * Get window object
   * @returns {?Object}
   */
  getWindow () {
    if (typeof window === 'undefined') {
      return null
    }
    return window
  }
})

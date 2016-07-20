#!/usr/bin/env node

/**
 * Compile to browser source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const ababelES2015 = require('ababe-es2015')

apeTasking.runTasks('browser', [
  () => ababelES2015('**/*.js', {
    cwd: 'lib',
    out: 'browser'
  })
], true)

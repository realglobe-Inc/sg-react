/**
 * Mount a react component into DOM tree.
 * @function mount
 * @param {string} containerId - DOMElement Id of the container to mount
 * @param {ReactComponent} Component - A component class to render
 * @param {Object} props - Properties
 * @returns {Promise} - A promise
 */
'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const { get } = require('bwindow')
const co = require('co')
const asleep = require('asleep')

/** @lends mount */
function mount (container, Component, props) {
  let window = get('window')
  if (!window) {
    return Promise.reject(new Error('Window not found'))
  }
  if (!container) {
    return Promise.reject(new Error('Container not found'))
  }
  let { document } = window
  if (typeof container === 'string') {
    let found = document.getElementById(container)
    if (!container) {
      return Promise.reject(new Error(`Container not found: ${container}`))
    }
    container = found
  }
  props = Object.assign({}, props) // Copy props to cut prototype chain
  let element = React.createElement(Component, props)

  return new Promise((resolve, reject) =>
    ReactDOM.render(element, container, () => resolve())
  )
}

Object.assign(mount, {
  withWait (containerId, Component, props) {
    return co(function * () {
      let container
      let count = 0
      while (!container) {
        if (count > 100) {
          throw new Error(`[sg-react] container not found: ${containerId}`)
        }
        container = document.getElementById(containerId)
        yield asleep(100)
        count++
      }
      yield mount(container, Component, props)
    })
  }
})

module.exports = mount

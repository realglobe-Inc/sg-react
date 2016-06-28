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
const WindowHelper = require('./helpers/window_helper')

/** @lends mount */
function mount (containerId, Component, props) {
  let window = WindowHelper.getWindow()
  if (!window) {
    return Promise.reject(new Error('Window not found'))
  }
  let { document } = window
  let container = document.getElementById(containerId)
  let element = React.createElement(Component, props)

  return new Promise((resolve, reject) =>
    ReactDOM.render(element, container, () => resolve())
  )
}

module.exports = mount

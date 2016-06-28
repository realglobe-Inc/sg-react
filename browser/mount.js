/**
 * Mount a react component into DOM tree.
 * @function mount
 * @param {string} containerId - DOMElement Id of the container to mount
 * @param {ReactComponent} Component - A component class to render
 * @param {Object} props - Properties
 * @returns {Promise} - A promise
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var WindowHelper = require('./helpers/window_helper');

/** @lends mount */
function mount(containerId, Component, props) {
  var window = WindowHelper.getWindow();
  if (!window) {
    return Promise.reject(new Error('Window not found'));
  }
  var document = window.document;

  var container = document.getElementById(containerId);
  var element = React.createElement(Component, props);

  return new Promise(function (resolve, reject) {
    return ReactDOM.render(element, container, function () {
      return resolve();
    });
  });
}

module.exports = mount;
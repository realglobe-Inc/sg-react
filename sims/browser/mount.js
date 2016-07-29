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

var _require = require('bwindow');

var get = _require.get;

/** @lends mount */

function mount(container, Component, props) {
  var window = get('window');
  if (!window) {
    return Promise.reject(new Error('Window not found'));
  }
  if (!container) {
    return Promise.reject(new Error('Container not found'));
  }
  var document = window.document;

  if (typeof container === 'string') {
    var found = document.getElementById(container);
    if (!container) {
      return Promise.reject(new Error('Container not found: ' + container));
    }
    container = found;
  }
  props = Object.assign({}, props); // Copy props to cut prototype chain
  var element = React.createElement(Component, props);

  return new Promise(function (resolve, reject) {
    return ReactDOM.render(element, container, function () {
      return resolve();
    });
  });
}

module.exports = mount;
//# sourceMappingURL=data:application/json;base64,bnVsbA==
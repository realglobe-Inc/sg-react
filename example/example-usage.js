'use strict'

const { mount } = require('sg-react')
const React = require('react')

// Define an component
const RootComponent = React.createClass({
  /* ... */
})
const CONTAINER_ID = 'my-mount-root-element'

function onLoad () {
  window.removeEventListener('DOMContentLoaded', onLoad)

  // Create an element from the component and mount it to the DOM tree.
  mount(CONTAINER_ID, RootComponent, {
    // React props
    foo: 'bar'
  }).then(() => {
    // Promise callback when done.
    console.log('component mounted!')
  })
}

window.addEventListener('DOMContentLoaded', onLoad)

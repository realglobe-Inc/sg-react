'use strict'

const { mount } = require('sg-react')
const React = require('react')

const RootComponent = React.createClass({
  /* ... */
})
const CONTAINER_ID = 'my-mount-root-element'

function onLoad () {
  window.removeEventListener('DOMContentLoaded', onLoad)

  mount(CONTAINER_ID, RootComponent, {
    // React props
    foo: 'bar'
  }).then(() => {
    console.log('component mounted!')
  })
}

window.addEventListener('DOMContentLoaded', onLoad)

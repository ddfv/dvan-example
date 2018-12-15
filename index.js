/**
 * preact
 */
/* import { h, render } from 'preact'
import App from '@/App.js'
render(<App />, document.querySelector('#app'))
 */
/**
 * vue
 */
import Vue from 'vue'
import App from '@/App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

/**
 * react
 */
/* import React from 'react'
import { render } from 'react-dom'
import App from '@/App.jsx'

render(<App />, document.querySelector('#app'))
 */
/**
 * vanilla
 */
/* const el = document.createElement('div')
el.textContent = 'Hello, vanilla'
// Public template.html no #app
// document.body.appendChild(el)
document.querySelector('#app').appendChild(el)
 */
import '@/style.css'
// import 'antd/dist/antd.css'
import React, { Component } from 'react'
import './app.scss'
import './style.scss'
import { Image } from '../../Assets'

class App extends Component {
  render() {
    return (
      <div>
        <img src={Image} alt="" />
        <a href="#">Hello word</a>
        <h1>Hello world! 1111 222</h1>
      </div>
    )
  }
}

export default App

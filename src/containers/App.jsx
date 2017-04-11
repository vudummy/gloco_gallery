import React from 'react'
import Header from './Header.jsx'
import Gallery from './Gallery.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Gallery />
      </div>
    )
  }
}

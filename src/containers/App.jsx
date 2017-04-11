import React from 'react'
import fetch from 'isomorphic-fetch'
import _ from 'lodash/fp'
import Header from './Header.jsx'
import Gallery from './Gallery.jsx'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { photos: [] }
  }

  componentDidMount() {
    // For demonstration, lets use a Fake Rest API for resource-fetching
    // Fetch first 25 photos
    fetch('http://jsonplaceholder.typicode.com/photos', { method: 'get' }).then(
      response => response.json().then(
        res => this.setState({ photos: _.filter(x => x.id < 26, res) })
      )
    ).catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <Header />
        <Gallery photos={this.state.photos} />
      </div>
    )
  }
}

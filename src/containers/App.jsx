import React from 'react'
import fetch from 'isomorphic-fetch'
import _ from 'lodash/fp'
import InfiniteScroll from 'react-infinite-scroller'
import Header from './Header.jsx'
import Gallery from './Gallery.jsx'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { photos: [], hasMore: true }
  }

  componentDidMount() {
    // For demonstration purpose, lets use a Fake Rest API for resource-fetching (http://jsonplaceholder.typicode.com/)
    // Fetch first 25 photos when done mounting
    fetch('http://jsonplaceholder.typicode.com/photos', { method: 'get' }).then(
      response => response.json().then(
        res => this.setState({ photos: _.filter(img => img.id < 26, res) })
      )
    ).catch(err => console.error(err))
  }

  loadMoreImg() {
    const { photos } = this.state
    const { length } = photos
    if (photos.length === 1) return
    fetch('http://jsonplaceholder.typicode.com/photos', { method: 'get' }).then(
      response => response.json().then(
        res => {
          const nextSetOfImg = _.filter(img => img.id > length && img.id < (length + 25), res)
          this.setState({ photos: photos.concat(nextSetOfImg) })
          if (length > 105) this.setState({ hasMore: false })
        }
      )
    ).catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <Header />
        <InfiniteScroll
          pageStart={0}  
          loadMore={this.loadMoreImg.bind(this)}
          hasMore={this.state.hasMore}
          loader={<div className="loader">Loading ...</div>}
          threshold={20}
        >
          <Gallery photos={this.state.photos} />
        </InfiniteScroll>  
      </div>
    )
  }
}

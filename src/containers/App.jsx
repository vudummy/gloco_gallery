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

  loadMoreImg() {
    const { photos } = this.state
    const { length } = photos
    fetch('http://jsonplaceholder.typicode.com/photos', { method: 'get' }).then(
      response => response.json().then(
        res => {
          const nextSetOfImg = res.filter(img => img.id > length && img.id < (length + 26))
          setTimeout(() => this.setState({
            photos: _.take(105 ,photos.concat(nextSetOfImg)),
            hasMore: !(length > 104)
          }), 150)
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

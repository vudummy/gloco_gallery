import React from 'react'
import fetch from 'isomorphic-fetch'
import InfiniteScroll from 'react-infinite-scroller'
import Header from './Header'
import Gallery from './Gallery'
import spinner from '../css/balls.svg'
import arrow from '../css/arrow.png'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { photos: [], hasMore: true, keepLoading: true }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/photos', { method: 'get' }).then(
      response => response.json().then(
        result => this.setState({ photos: result.slice(0, 25) })
      )
    ).catch(console.error)
  }

  loadMoreImg() {
    const { photos, keepLoading } = this.state
    const { length } = photos
    if (!keepLoading) return
    this.setState({ keepLoading: false })
    fetch('http://jsonplaceholder.typicode.com/photos', { method: 'get' }).then(
      response => response.json().then(
        result => {
          const nextSetOfImg = result.filter(img => img.id > length && img.id < (length + 26))
          this.setState({
            photos: photos.concat(nextSetOfImg).slice(0, 105),
            hasMore: !(length > 104),
            keepLoading: true
          })
        }
      )
    ).catch(console.error)
  }

  loader = () => (
    <div className="ui container fluid">
      <img src={spinner} className="ui centered small image"/>
    </div>
  )

  render() {
    return (
      <div>
        <Header />
        <InfiniteScroll
          pageStart={0}
          initialLoad={false}
          loadMore={this.loadMoreImg.bind(this)}
          hasMore={this.state.hasMore}
          loader={this.loader()}
          threshold={5}
          className="ui gallery main container"
        >
          <Gallery photos={this.state.photos} />
        </InfiniteScroll>  
      </div>
    )
  }
}

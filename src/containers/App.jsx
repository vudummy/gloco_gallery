import React from 'react'
import fetch from 'isomorphic-fetch'
import InfiniteScroll from 'react-infinite-scroller'
import { StickyContainer } from 'react-sticky'
import Header from './Header'
import Gallery from './Gallery'
import GalleryModal from './GalleryModal'
import Stickybar from '../components/Stickybar'
import spinner from '../css/balls.svg'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { photos: [], hasMore: true, keepLoading: true, modalIsOpen: false }
  }

  loadMoreImg = () => {
    console.log('Call fetch')
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
          })
          setTimeout(() => this.setState({ keepLoading: true }), nextSetOfImg.length * 100)
        }
      )
    ).catch(console.error)
  }

  loader = () => (
    <div className="ui container fluid">
      <img src={spinner} className="ui centered small image"/>
    </div>
  )

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const { photos, hasMore, modalIsOpen } = this.state
    const pageStart = Math.floor(photos.length / 25)
    return (
      <StickyContainer>
        <Header />
        <Stickybar demonstrate={this.openModal} />
        <GalleryModal
          photos={photos}  
          modalIsOpen={modalIsOpen}
          closeModal={this.closeModal}
          loadMore={this.loadMoreImg}
          hasMore={hasMore}
          pageStart={pageStart}
        />
      </StickyContainer>
    )
  }
}

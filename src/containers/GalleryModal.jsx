import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Modal from 'react-modal'
import Gallery from './Gallery'
import spinner from '../css/balls.svg'

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    transition: 'opacity .3s'
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}

const Loader = () => (
  <div className="ui container fluid">
    <img src={spinner} className="ui centered small image" />
  </div>
)

const GalleryModal = ({ modalIsOpen, closeModal, photos, loadMore, hasMore, pageStart }) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <InfiniteScroll
      pageStart={pageStart}
      initialLoad={true}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<Loader />}
      threshold={10}
      useWindow={false}
      className="ui gallery main grid container"
    >
      <Gallery photos={photos} />
    </InfiniteScroll>  
  </Modal>
)

export default GalleryModal

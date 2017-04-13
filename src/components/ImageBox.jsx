import React from 'react'

class ImageBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loaded: false }
  }

  imgLoaded = () => this.setState({ loaded: true })

  render() {
    const { image, delay } = this.props
    const { loaded } = this.state
    const style = {
      transition: `opacity .5s ${delay * 0.1}s, height .3s ${delay * 0.1}s`,
      opacity: loaded ? 1 : 0,
      height: loaded ? '100%' : '0'
    }
    return (
      <div className={`ui ${image.id % 3 === 0 ? 'fade' : `move ${image.id % 4 === 0 ? 'right' : 'up'}`} reveal clipped`} style={style}>
        <div className="visible content">
          <img src="http://lorempixel.com/g/600/600" className="ui centered medium image" onLoad={this.imgLoaded} />
        </div>
        <div className="hidden content">
          <img src={image.url} className="ui centered medium image" />
        </div>
      </div>
    )
  }
}

ImageBox.propTypes = { image: React.PropTypes.object.isRequired }

export default ImageBox

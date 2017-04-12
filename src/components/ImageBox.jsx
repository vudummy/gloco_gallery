import React from 'react'

const ImageBox = ({ image }) => (
  <div className={`ui ${image.id % 3 === 0 ? 'fade' : `move ${image.id % 4 === 0 ? 'right' : 'up'}`} reveal clipped`}>
    <div className="visible content">
      <img src="http://lorempixel.com/g/600/600" className="ui centered medium image" />
    </div>
    <div className="hidden content">
      <img src={image.url} className="ui centered medium image" />
    </div>
  </div>
)

ImageBox.propTypes = { image: React.PropTypes.object.isRequired }

export default ImageBox

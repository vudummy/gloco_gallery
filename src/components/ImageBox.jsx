import React from 'react'

const ImageBox = ({ image }) => (
  <img src={image.thumbnailUrl} alt={image.title} width="200" height="150" />
)

ImageBox.propTypes = { image: React.PropTypes.object.isRequired }

export default ImageBox

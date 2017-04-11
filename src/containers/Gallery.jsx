import React from 'react'
import ImageBox from '../components/ImageBox.jsx'

const Gallery = ({ photos }) => (
  <div>
    <h2>
      stuffs...  
    </h2>
    {photos.map(image => <ImageBox image={image} key={image.id} />)}
  </div>
)

export default Gallery

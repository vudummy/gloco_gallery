import React from 'react'
import ImageBox from '../components/ImageBox'
import css from '../css/custom.css'

const Gallery = ({ photos }) => (
  <div className="doubling five column row">
    {photos.map((image, index) => (
      <div className="column" key={image.id}>
        <ImageBox image={image} delay={index} />
      </div>
    ))}
  </div>  
)

export default Gallery

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'

export function ImageGallery({images}) {
  return (
    <ul className="gallery">
        {images.map(image => <ImageGalleryItem imageCard={image}/>)}
    </ul>
  )
}

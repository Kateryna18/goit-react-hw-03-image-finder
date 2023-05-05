import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export function ImageGallery({ images }) {
  console.log(images);
  return (
    <ul className="gallery">
      {images.map(({ webformatURL, id, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          largeUrl={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
}

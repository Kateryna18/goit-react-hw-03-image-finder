import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';

export function ImageGallery({ images,  onClick}) {
  // console.log(images);
  return (
    <ul className={css.gallery} onClick={onClick}>
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

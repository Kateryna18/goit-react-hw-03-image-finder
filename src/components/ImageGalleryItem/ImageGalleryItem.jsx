import React from 'react';
import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({url, largeUrl, tags}) {
  
  return (
    <li className={css.galleryItem}>
      <img className={css.galleryImage} src={url} alt={tags} width="250px"/>
    </li>
  );
}

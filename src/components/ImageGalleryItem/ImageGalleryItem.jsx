import React from 'react';

export function ImageGalleryItem({url, largeUrl, tags}) {
  
  return (
    <li className="gallery-item">
      <img src={url} alt={tags} width="250px"/>
    </li>
  );
}

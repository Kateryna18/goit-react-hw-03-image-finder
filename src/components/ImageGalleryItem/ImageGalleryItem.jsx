import React from 'react';

export function ImageGalleryItem({previewURL, tags, id}) {
  return (
    <li className="gallery-item" key={id}>
      <img src={previewURL} alt={tags} />
    </li>
  );
}

import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
 
const Gallery = ({ images, scrollPosition }) => {

    const createGalleryColumn = (colNumber) => {
        const imageCol = images.filter(image => {
            return image.col === `col-${colNumber}`
        })
        return imageCol.map((image) => {
            return <LazyLoadImage
            key={image.key}
            alt={image.alt}
            height={image.height}
            // Make sure to pass down the scrollPosition,
            // this will be used by the component to know
            // whether it must track the scroll position or not
            scrollPosition={scrollPosition}
            src={image.src}
            width={image.width} 
            />}
    )
    }

  return <div className="container">
    <div className="col">{createGalleryColumn(1)}</div>
    <div className="col">{createGalleryColumn(2)}</div>
    <div className="col">{createGalleryColumn(3)}</div>
    </div>
};
// Wrap Gallery with trackWindowScroll HOC so it receives
// a scrollPosition prop to pass down to the images
export default trackWindowScroll(Gallery);
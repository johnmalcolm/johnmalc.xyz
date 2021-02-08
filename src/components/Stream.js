import React from "react";
import LazyLoad from "react-lazyload";
import ImageLoader from './ImageLoader.js';


const Stream = ({ images }) => {
  const createGalleryColumn = (colNumber) => {
    const imageCol = images.filter((image) => {
      return image.col === `col-${colNumber}`;
    });
    return imageCol.map((image) => {
      const width = image.width.slice(0, -2);
      const height = image.height.slice(0, -2);
      const paddingBottom = (height / width) * 100 + "%";

      return (
        <LazyLoad
          classNamePrefix="img-container"
          style={{ paddingBottom: paddingBottom }}
        >
          <ImageLoader className="stream-img" src={image.src} alt="Lazy Load Example" />
          <div class="img-caption">DIGITAL_COMMONS // workshop_01 </div>
        </LazyLoad>
      );
    });
  };

  return (
    <div className="container">
      <div className="col">{createGalleryColumn(1)}</div>
      <div className="col">{createGalleryColumn(2)}</div>
      <div className="col">{createGalleryColumn(3)}</div>
    </div>
  );
};

export default Stream;

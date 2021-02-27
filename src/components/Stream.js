import React, {useEffect, useState} from "react";
import LazyLoad from "react-lazyload";
import ImageLoader from "./ImageLoader.js";

const Stream = ({ images }) => {
  const [windowWidth, setWidth] = useState(window.innerWidth);
  useEffect(()=>{
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  },[])
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
          // placeholder={<h2>Hello</h2>}
          unmountIfInvisible={false}
        >
          <ImageLoader
            className="stream-img"
            classNameCaption="img-caption"
            src={image.src}
            caption={image.caption}
          />
        </LazyLoad>
      );
    });
  };
  {console.log(windowWidth)}
  return (
    <div className="container">
      <div className="feed">{createGalleryColumn(1)}</div>
      <div className="feed">{createGalleryColumn(2)}</div>
      <div className="feed">{createGalleryColumn(3)}</div>
    </div>
  );
};

export default Stream;

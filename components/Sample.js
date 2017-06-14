import React from "react";
import Gallery from "react-photo-gallery";

export default class Sample extends React.Component {
  render() {
    return (<Gallery photos={PHOTO_SET} onClickPhoto={this.openLightbox} />)
  }
}
const PHOTO_SET = [
  {
    src: "http://res.cloudinary.com/dymlhv20r/image/upload/v1497125812/IMG_5966_rrdnow.jpg",
    srcset: [
      "http://res.cloudinary.com/dymlhv20r/image/upload/v1497125811/IMG_5893_xvilv3.jpg"
    ],
    sizes: ["(min-width: 480px) 50vw", "(min-width: 1024px) 33.3vw", "100vw"],
    width: 681,
    height: 1024,
    alt: "image 1"
  }
];

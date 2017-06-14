import React from "react";

const MainContent = () => {
  return (
    <div className="MainContent">
      {imgUrls.map((pic, index) => {
        return <div key={index}><img src={pic} width="100" /></div>;
      })}
    </div>
  );
};

export default MainContent;

const imgUrls = [
  "http://res.cloudinary.com/dymlhv20r/image/upload/v1497125811/IMG_5893_xvilv3.jpg",
  "http://res.cloudinary.com/dymlhv20r/image/upload/v1497125812/IMG_5966_rrdnow.jpg",
  "http://res.cloudinary.com/dymlhv20r/image/upload/v1497125808/IMG_5834_dh1faw.jpg",
  "http://res.cloudinary.com/dymlhv20r/image/upload/v1497125810/IMG_5959_bplsnf.jpg",
  "http://res.cloudinary.com/dymlhv20r/image/upload/v1497125808/IMG_5781_grot1a.jpg",
  "http://res.cloudinary.com/dymlhv20r/image/upload/v1497125807/IMG_5775_gza3sf.jpg",
  "http://res.cloudinary.com/dymlhv20r/image/upload/v1497125807/IMG_5764_tmmhsd.jpg",
  "http://res.cloudinary.com/dymlhv20r/image/upload/v1497125807/IMG_5741_mxv0cq.jpg",
  "http://res.cloudinary.com/dymlhv20r/image/upload/v1497125807/IMG_5821_c3tyuz.jpg"
];

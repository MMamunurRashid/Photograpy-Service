import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const MyAccessories = () => {
  const images = [
    {
      item: "http://sc04.alicdn.com/kf/HTB1669Gtr9YBuNjy0Fgq6AxcXXaj.jpg",
    },
    {
      item: "https://5.imimg.com/data5/EG/OJ/MY-47277797/camra-rental-services-for-birthday-photography-500x500.jpg",
    },
    {
      item: "https://pixc.com/wp-content/uploads/2017/08/Image-1_Lighting-options_headline-image-scaled.jpg",
    },
    {
      item: "https://cf.shopee.com.my/file/a9e5585d487eec25a626110c39af0da9",
    },
  ];
  return (
    <div className="w-11/12 sm:w-3/4 m-auto mb-20">
      <h1 className="text-white text-3xl text-center font-serif mt-20 mb-6">
        My Accessories
      </h1>
      <PhotoProvider>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-5 gap-1">
          {images.map((item, idx) => (
            <PhotoView key={idx} src={item.item}>
              <img
                className="w-full sm:h-64 h-32  shadow-xl rounded-lg"
                src={item.item}
                alt=""
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default MyAccessories;

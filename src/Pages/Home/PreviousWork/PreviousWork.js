import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PreviousWork = () => {
  const images = [
    {
      item: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      item: "https://www.imagemakerclicks.com/wp-content/uploads/2021/05/DSC_1339_edited-1024x1024.jpeg",
    },
    {
      item: "https://images.pexels.com/photos/2058070/pexels-photo-2058070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      item: "https://i0.wp.com/shaadiwish.com/blog/wp-content/uploads/2020/06/faisal-alam-1024x683.jpg",
    },
    {
      item: "https://dmdigitals.com/wp-content/uploads/2021/05/Wedding-photography-bridal-shoot-1.jpg",
    },
    {
      item: "http://bdphotographers.com/blogs-and-news/wp-content/uploads/2017/05/14908368897W9A4672.jpg",
    },
    {
      item: "https://www.weddingsutra.com/images/Vendor_Images/Photographer/memoirs-photography/memoirs-photography-10.jpg",
    },
    {
      item: "https://www.ten2tenphotography.com/wp-content/uploads/2021/09/ravine-vineyard-wedding-photos-251_websize.jpg",
    },
  ];
  return (
    <div className="sm:w-3/4 m-auto w-11/12">
      <h1 className=" text-3xl text-center font-serif mt-20 mb-6">
        My Previous Work
      </h1>
      <PhotoProvider>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-5 gap-1">
          {images.map((item, idx) => (
            <PhotoView key={idx} src={item.item}>
              <div className="w-full sm:h-64 h-32 shadow-xl rounded-lg overflow-hidden ">
                <img
                  className="w-full sm:h-64 h-32  hover:cursor-pointer  transition ease-in-out delay-100 hover:-translate-y-[784px, 1446px] hover:scale-125  duration-500 hover:opacity-30 "
                  src={item.item}
                  alt=""
                />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default PreviousWork;

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
      item: "https://image.wedmegood.com/resized/540X/uploads/member/575596/1557337623_PSX_20190508_141812.jpg?crop=0,0,2048,1152",
    },
    {
      item: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqog7xUunrZb3lRXIJpUNqDxcxRFWFmDHS1Ajicu-4qRoBkfolTcj41i42-84B5QkrIM&usqp=CAU",
    },
    {
      item: "https://www.weddingsutra.com/images/Vendor_Images/Photographer/memoirs-photography/memoirs-photography-10.jpg",
    },
    {
      item: "https://www.ten2tenphotography.com/wp-content/uploads/2021/09/ravine-vineyard-wedding-photos-251_websize.jpg",
    },
  ];
  return (
    <div className="w-3/4 m-auto">
      <h1 className="text-white text-3xl text-center font-serif mt-20 mb-6">
        My Previous Work
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

export default PreviousWork;

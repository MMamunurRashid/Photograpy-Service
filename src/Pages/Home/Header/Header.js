import { Carousel } from "react-carousel-minimal";

function App() {
  const data = [
    {
      image:
        "https://www.ten2tenphotography.com/wp-content/uploads/2021/09/ravine-vineyard-wedding-photos-251_websize.jpg",
      caption: `<div>
                 Smile Photography
                </div>`,
    },
    {
      image:
        "https://www.weddingsutra.com/images/Vendor_Images/Photographer/memoirs-photography/memoirs-photography-10.jpg",
      caption: "Smile Photography",
    },
    {
      image:
        "http://bdphotographers.com/blogs-and-news/wp-content/uploads/2017/05/14908368897W9A4672.jpg",
      caption: "Smile Photography",
    },
    {
      image:
        "https://dmdigitals.com/wp-content/uploads/2021/05/Wedding-photography-bridal-shoot-1.jpg",
      caption: "Smile Photography",
    },
    {
      image: "https://i.ibb.co/rkmg1mP/pexels-ankur-kumar-3872626.jpg",
      caption: "Smile Photography",
    },
    {
      image: "https://i.ibb.co/RvsMw1X/WEDDING-PHOTO-10.jpg",
      caption: "Smile Photography",
    },
  ];

  const captionStyle = {
    fontSize: "60px",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={3000}
            width="1200px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1200px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

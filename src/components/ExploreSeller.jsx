import React from "react";

function ExploreSeller() {
  const category = [
    {
      id: 1,
      name: "Smartwatches",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg",
    },
    {
      id: 1,
      name: "Smartwatches",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg",
    },
    {
      id: 1,
      name: "Smartwatches",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg",
    },
    {
      id: 1,
      name: "Smartwatches",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg",
    },
    {
      id: 1,
      name: "Smartwatches",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg",
    },
    {
      id: 1,
      name: "Smartwatches",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg",
    },
    {
      id: 1,
      name: "Smartwatches",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg",
    },
    {
      id: 1,
      name: "Smartwatches",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg",
    },
  ];
  return (
    <div className="flex w-full my-10">
      <div className="w-11/12 self-center mx-auto">
        <p className="text-xl">
          Explore <b>BestSellers</b>
        </p>

        <div className="flex flex-row overflow-x-scroll container-video">
          {category.map((value, i) => {
            return (
              <video
                src={value.video}
                className="rounded-md w-3/12  mr-5 mt-5 "
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => e.target.pause()}
                poster={value.poster}
              ></video>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExploreSeller;

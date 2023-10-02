import React from "react";

function DailyDeals() {
  const category = [
    {
      id: 1,
      name: "Airdopes 131",
      tag: "60 hours playback",
      poster:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
      price: 999,
      totalPrice: 2990,
      rating: 4.8,
      anotherTag: "Bestsellers",
    },
  ];
  return (
    <div className="flex w-full my-10">
      <div className="w-11/12 self-center mx-auto">
        <p className="text-xl">
          Daily <b>Deals</b>
        </p>

        <div className="grid grid-cols-4 gap-x-5">
          {category.map((value) => {
            return (
              <div className="mt-5 rounded-lg relative">
                <img src={value.poster} className="w-full object-cover h-80 rounded-md" ></img>
              
                    <p className="bg-yellow-400 text-center relative top-[-10px] inline-block self-center">{value.tag}</p>
               
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DailyDeals;

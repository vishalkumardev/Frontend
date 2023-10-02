import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row  bg-white justify-between items-center px-10">
      <div className="flex flex-row  justify-around space-x-10">
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
          alt=""
          className="w-16 h-20 object-contain"
        />
        <div className="flex  flex-row items-center space-x-8">
          <Link>
            <p>Categories</p>
          </Link>
          <Link>
            <p>Daily Deals</p>
          </Link>
          <Link>
            <p>Gift with boAt</p>
          </Link>
          <Link>
            <p>Bulk Orders</p>
          </Link>
          <Link>
            <p>More</p>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-4">
        <div className="bg-gray-200 px-4 py-2 flex flex-row items-center rounded-full space-x-2">
          <ion-icon name="search-outline"></ion-icon>
          <input
            type="text"
            placeholder="search airbuds"
            className="bg-transparent outline-none border-none  flex-1 text-xs"
          />
        </div>

        <ion-icon name="person-outline"></ion-icon>
        <ion-icon name="bag-outline"></ion-icon>
      </div>
    </div>
  );
}

export default Header;

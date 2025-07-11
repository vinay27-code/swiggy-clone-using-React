import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";

export default function RestaurantsList() {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      setRestaurantData(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    }

    fetchData();
  }, []);

  if (restaurantData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="text-2xl sm:text-3xl font-bold text-center mb-10">
        Food Delivery from Restaurants Nearby
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {restaurantData.map((restaurantInfo) => (
          <RestaurantCards
            key={restaurantInfo?.info?.id}
            restaurantInfo={restaurantInfo}
          />
        ))}
      </div>
    </div>
  );
}

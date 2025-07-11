import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import MenuCards from "./MenuCards";
import MenuShimmer from "./MenuShimmer"; // 🆕 Custom shimmer loader

export default function RestaurantMenu() {
  let { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [dietaryPreference, setDietaryPreference] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      const temporaryData =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filteredData = temporaryData.filter(
        (items) => "title" in items?.card?.card
      );
      setRestaurantData(filteredData);
    }

    fetchData();
  }, [id]);

  return (
    <div className="px-4">
      {/* Search Dishes */}
      <div className="w-full sm:w-[80%] mx-auto mt-10 mb-6">
        <Link to={`/city/delhi/${id}/search`}>
          <p className="text-center py-3 rounded-xl bg-gray-200 text-lg sm:text-xl font-semibold">
            Search for Dishes
          </p>
        </Link>
      </div>

      {/* Veg / Non-Veg Filters */}
      <div className="w-full sm:w-[80%] mx-auto flex flex-wrap justify-center gap-4 mb-8">
        <button
          className={`text-base sm:text-lg py-2 px-5 rounded-2xl ${
            dietaryPreference === "veg" ? "bg-green-500 text-white" : "bg-gray-300"
          }`}
          onClick={() =>
            setDietaryPreference(dietaryPreference === "veg" ? null : "veg")
          }
        >
          Veg
        </button>
        <button
          className={`text-base sm:text-lg py-2 px-5 rounded-2xl ${
            dietaryPreference === "non-veg"
              ? "bg-red-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() =>
            setDietaryPreference(
              dietaryPreference === "non-veg" ? null : "non-veg"
            )
          }
        >
          Non-Veg
        </button>
      </div>

      {/* Menu Items or Shimmer */}
      <div className="w-full sm:w-[80%] mx-auto">
        {restaurantData ? (
          restaurantData.map((menuItems) => (
            <MenuCards
              key={menuItems?.card?.card?.title}
              menuItems={menuItems?.card?.card}
              dietaryPreference={dietaryPreference}
            />
          ))
        ) : (
          <MenuShimmer /> // 🆕 Custom shimmer shown while loading
        )}
      </div>
    </div>
  );
}

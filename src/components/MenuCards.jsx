import { useState } from "react";
import RestaurantItemsInfo from "./RestaurantItemsInfo";

export default function MenuCards({ menuItems, dietaryPreference }) {
  if ("categories" in menuItems) {
    return (
      <div className="w-full px-4 sm:px-0">
        <p className="text-lg sm:text-2xl font-semibold">{menuItems?.title}</p>
        <div>
          {menuItems?.categories?.map((restaurantItems) => (
            <MenuCards
              key={restaurantItems?.title}
              menuItems={restaurantItems}
              dietaryPreference={dietaryPreference}
            />
          ))}
        </div>
      </div>
    );
  }

  const [isOpen, setIsOpen] = useState(true);

  const renderItems = (items) => (
    <>
      <div className="w-full mt-5 px-4 sm:px-0">
        <div className="flex justify-between items-center w-full">
          <p className="text-xl sm:text-3xl font-bold mb-4">{menuItems?.title}</p>
          <button
            className="text-xl sm:text-2xl font-bold mr-5 sm:mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "˄" : "˅"}
          </button>
        </div>
        <div>
          {items.map((restaurantItems) => (
            <RestaurantItemsInfo
              key={restaurantItems?.card?.info?.id}
              restaurantItems={restaurantItems?.card?.info}
            />
          ))}
        </div>
        <div className="h-3 bg-gray-200 my-2"></div>
      </div>
    </>
  );

  if (!isOpen) {
    return (
      <div className="w-full px-4 sm:px-0">
        <div className="flex justify-between items-center w-full">
          <p className="text-xl sm:text-3xl font-bold mb-4">{menuItems?.title}</p>
          <button
            className="text-xl sm:text-2xl font-bold mr-5 sm:mr-20 text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "˄" : "˅"}
          </button>
        </div>
        <div className="h-3 bg-gray-200 my-2"></div>
      </div>
    );
  }

  const allItems = menuItems?.itemCards || [];

  if (dietaryPreference === "veg") {
    const vegItems = allItems.filter((i) => "isVeg" in i?.card?.info);
    return renderItems(vegItems);
  }

  if (dietaryPreference === "non-veg") {
    const nonVegItems = allItems.filter((i) => !("isVeg" in i?.card?.info));
    return renderItems(nonVegItems);
  }

  return renderItems(allItems);
}

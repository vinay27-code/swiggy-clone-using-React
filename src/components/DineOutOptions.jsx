import { dineoutRestaurants } from "../utils/DineOutRestaurantsData";
import DineOutCards from "./DineOutCards";

export default function DineOutOptions() {
    return (
        <div className="max-w-[90%] mx-auto mt-10 px-4 sm:px-0">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
                Discover Best Restaurants on Dineout
            </h1>

            <div className="flex gap-4 sm:gap-10 overflow-x-auto pb-4 hide-scrollbar">
                {dineoutRestaurants.map((restaurantData) => (
                    <DineOutCards key={restaurantData?.info?.id} restaurantData={restaurantData} />
                ))}
            </div>
        </div>
    );
}

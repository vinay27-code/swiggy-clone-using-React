import { imageGridCards } from "../utils/FoodData";
import FoodCards from "./FoodCards";

export default function FoodOptions() {
    return (
        <div className="max-w-[90%] mx-auto mt-20 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {imageGridCards.map((foodData) => (
                    <FoodCards key={foodData.id} foodData={foodData} />
                ))}
            </div>
        </div>
    );
}

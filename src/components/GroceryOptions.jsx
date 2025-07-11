import { groceryGridCards } from "../utils/GroceriesData";
import GroceryCards from "./GroceryCards";

export default function GroceryOptions() {
    return (
        <div className="max-w-[90%] container mx-auto mt-20 px-4">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8">Shop Groceries on Instamart</h1>
            <div className="flex flex-nowrap overflow-x-auto gap-6 sm:gap-10 scroll-smooth scrollbar-hide">
                {groceryGridCards.map((groceryData) => (
                    <GroceryCards key={groceryData.id} groceryData={groceryData} />
                ))}
            </div>
        </div>
    );
}

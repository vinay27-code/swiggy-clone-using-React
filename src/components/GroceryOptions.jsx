import { groceryGridCards } from "../utils/GroceriesData"
import GroceryCards from "./GroceryCards"

export default function GroceryOptions(){
    return(
        <>
        <div className="max-w-[90%] container mx-auto mt-20 gap-5">
            <h1 className="text-3xl font-bold">Shop Groceries on Instamart</h1>
        <div className="max-w-[90%] container mx-auto flex flex-nowrap overflow-x-auto gap-10 mt-20 mb-20">
            {
                groceryGridCards.map((groceryData)=><GroceryCards key={groceryData.id} groceryData={groceryData}/>)
            }
        </div>
        </div>
        </>
    )
}
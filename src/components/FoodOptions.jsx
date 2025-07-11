import { imageGridCards } from "../utils/FoodData";
import FoodCards from "./FoodCards";

export default function FoodOptions(){
    return(
        <>
            <div className="max-w-[80%] container mx-auto flex flex-wrap mt-20 gap-5">
                {
                    imageGridCards.map((foodData)=><FoodCards key={foodData.id} foodData={foodData}/>)
                }
            </div>
        </>
    )
}
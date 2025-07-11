import { dineoutRestaurants } from "../utils/DineOutRestaurantsData";
import DineOutCards from "./DineOutCards";
export default function DineOutOptions(){
    return(
        <>
         <div className="max-w-[90%] container mx-auto mt-20 gap-5">
                    <h1 className="text-3xl font-bold">Discover best restaurants on Dineout</h1>
                <div className="max-w-[90%] container mx-auto flex flex-nowrap overflow-x-auto gap-10 mt-20">
                    {
                        dineoutRestaurants.map((restaurantData)=><DineOutCards key={restaurantData?.info?.id} restaurantData={restaurantData}/>)
                    }
                </div>
                </div>
        </>
    )
}
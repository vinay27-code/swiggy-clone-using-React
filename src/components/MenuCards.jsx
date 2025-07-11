import { useState } from "react";
import RestaurantItemsInfo from "./RestaurantItemsInfo";


export default function MenuCards({menuItems,dietaryPreference}){

    if("categories" in menuItems){
        return(
            <div className="w-full">
                <p>{menuItems?.title}</p>
                <div>
                    {
                        menuItems?.categories?.map((restaurantItems)=><MenuCards key={restaurantItems?.title} menuItems={restaurantItems} dietaryPreference={dietaryPreference}/>)
                    }
                </div>

            </div>
        )
    }

    const [isOpen,setIsOpen]=useState(true);

    if(!isOpen){
        return(
            <>
                <div className="w-full">
                    <div className="flex justify-between w-full">
                        <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
                        <button className="text-2xl font-bold mr-20 text-black" onClick={()=>setIsOpen(!isOpen)}>{(isOpen?'˄':'˅')}</button>
                    </div>
                    <div className="h-3 bg-gray-200 my-2"></div>
                </div>
            </>
        )
    }


    if(dietaryPreference==="veg"){
        return(
            <>
                <div>
           
            <div className="w-full mt-5">
                <div className="flex justify-between w-full">
                        <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
                        <button className="text-2xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{(isOpen?"˄":"˅")}</button>
                    </div>
                <div>
                    {
                        menuItems?.itemCards?.filter((items)=>"isVeg" in items?.card?.info)?.map((restaurantItems)=><RestaurantItemsInfo key={restaurantItems?.card?.info?.id} restaurantItems={restaurantItems?.card?.info}/>)
                    }
                </div>
                <div className="h-3 bg-gray-200 my-2"></div>
            </div>
        </div>  
            </>
        )
    }

      if(dietaryPreference==="non-veg"){
        return(
            <>
                <div>
           
            <div className="w-full mt-5">
                <div className="flex justify-between w-full">
                        <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
                        <button className="text-2xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{(isOpen?"˄":"˅")}</button>
                    </div>
                <div>
                    {
                        menuItems?.itemCards?.filter((items)=>!("isVeg" in items?.card?.info))?.map((restaurantItems)=><RestaurantItemsInfo key={restaurantItems?.card?.info?.id} restaurantItems={restaurantItems?.card?.info}/>)
                    }
                </div>
                <div className="h-3 bg-gray-200 my-2"></div>
            </div>
        </div>  
            </>
        )
    }


    return(
        <>
        <div>
           
            <div className="w-full mt-5">
                <div className="flex justify-between w-full">
                        <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
                        <button className="text-2xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{(isOpen?"˄":"˅")}</button>
                    </div>
                <div>
                    {
                        menuItems?.itemCards?.map((restaurantItems)=><RestaurantItemsInfo key={restaurantItems?.card?.info?.id} restaurantItems={restaurantItems?.card?.info}/>)
                    }
                </div>
                <div className="h-3 bg-gray-200 my-2"></div>
            </div>
        </div>    
        </>
    )
}
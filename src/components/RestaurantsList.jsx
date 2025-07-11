import { useEffect } from "react";
import { useState } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";


export default function RestaurantsList(){

    const [restaurantData, setRestaurantData]=useState([]);

    useEffect(()=>{
        async function fetchData() {
            const proxyServer="https://cors-anywhere.herokuapp.com/";
            const swiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"
            const response=await fetch(proxyServer+swiggyAPI);
            const data=await response.json();
            setRestaurantData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        fetchData();
    },[]);

    console.log(restaurantData);

    if(restaurantData.length===0){
        return(
            <>
            <Shimmer/>
            </>
        )
    }

    return(
        <div className="flex flex-wrap container mx-auto mt-20 gap-5 h-62 w-[80%]">
            <div className="text-3xl font-bold text-center mx-auto">Food Delivery from restaurants nearby.</div>
            <div className="flex flex-wrap container mx-auto mt-20 gap-5 h-62 w-[80%]">
                {
                restaurantData.map((restaurantInfo)=><RestaurantCards key={restaurantInfo?.info?.id} restaurantInfo={restaurantInfo}/>)
            }
            </div>
        </div>
        );
}
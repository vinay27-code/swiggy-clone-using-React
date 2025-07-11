import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import MenuCards from "./MenuCards";
import { Link } from "react-router";



export default function RestaurantMenu(){

    let {id}=useParams();
    console.log(id);

    const [restaurantData, setRestaurantData]=useState(null);

     useEffect(()=>{
        async function fetchData() {
            const proxyServer="https://cors-anywhere.herokuapp.com/";
            const swiggyAPI=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
            const response=await fetch(proxyServer+swiggyAPI);
            const data=await response.json();
            const temporaryData=data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filteredData=temporaryData.filter((items)=>'title' in items?.card?.card);
            setRestaurantData(filteredData);
        }

        fetchData();
    },[]);
    console.log(restaurantData);

    const [dietaryPreference,setDietaryPreference]=useState(null);


    return(
        <>
        <div>
            <div className="w-[80%] mx-auto mt-20 mb-10">
                <Link to={`/city/delhi/${id}/search`}>
                    <p type="text" className="w-full text-center py-2 rounded-4xl bg-gray-200 text-xl"> Search for Dishes</p>
                </Link>
            </div>

             <div className="w-[80%] mt-10 mb-10 m-38">
                <button className={`text-xl py-2 px-4 mr-10 border-1 rounded-2xl ${dietaryPreference==="veg"?"bg-green-500":"bg-gray-300"}`} onClick={()=>setDietaryPreference(dietaryPreference==="veg"?null:"veg")}>Veg</button>
            <button className={`text-xl py-2 px-4 mr-2 border-1 rounded-2xl ${dietaryPreference==="non-veg"?"bg-red-500":"bg-gray-300"}`} onClick={()=>setDietaryPreference(dietaryPreference==="non-veg"?null:"non-veg")}>Non-Veg</button>
            </div>
            <div className="w-[80%] mx-auto">
                {
                    restaurantData?.map((menuItems)=><MenuCards key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} dietaryPreference={dietaryPreference}/>)
                }
            </div>
        </div>    
        </>
    )
}
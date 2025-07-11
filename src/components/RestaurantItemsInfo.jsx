import { useState } from "react";
import { addItems, decreaseQuantity, increaseQuantity } from "../cartStore/cartSlice";  
import { useDispatch, useSelector } from "react-redux";


export default function RestaurantItemsInfo({restaurantItems}){
    const dispatch=useDispatch();

    const items= useSelector(state=>state.cart.items);

   const element= items.find(items=>items.id===restaurantItems.id);

   const count= element?element.quantity:0;


    function addToCart(){
        dispatch(addItems(restaurantItems));

    }

    function handleIncrementQuantity(){
        dispatch(increaseQuantity(restaurantItems));
    }

    function handleDecrementQuantity(){
        dispatch(decreaseQuantity(restaurantItems));
    }



    return(<>
    <div className="flex w-full justify-between mb-5">
        <div className="w-[70%]">
            <p className="text-xl font-semibold text-gray-600">{restaurantItems?.name}</p>
            <p className="text-xl">{"₹"+restaurantItems?.price/100}</p>
            <span className="text-green-500">{restaurantItems?.ratings?.aggregatedRating?.rating ? `★${restaurantItems.ratings.aggregatedRating.rating}` : ''}</span>
            <span> {(restaurantItems?.ratings?.aggregatedRating?.ratingCountV2 ? `(${restaurantItems.ratings.aggregatedRating.ratingCountV2})` : '')}</span>
            <p>{restaurantItems?.description}</p>
        </div>
        <div className="w-[20%] relative h-42">
            <img className="w-full h-36 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restaurantItems?.imageId}/>
            {
                count===0?(<button className="absolute bottom-2 left-17 text-green-400 px-4 py-2 bg-white rounded-xl ml-7 text-xl font-bold" onClick={()=>addToCart()}>ADD</button>):(
                    <div className=" absolute bottom-2 left-17 text-xl flex gap-2 px-4 py-2 bg-white rounded-xl ml-7 font-bold  text-green-400">
                        <button onClick={()=>handleDecrementQuantity()}>-</button>
                        <span>{count}</span>
                        <button onClick={()=>handleIncrementQuantity()}>+</button>
                    </div>
                )
            }
        </div>
    </div>
    <hr></hr>
    </>);
}
import { Link } from "react-router";

export default function RestaurantCards({restaurantInfo}){
    return(
  <Link to={`/city/delhi/`+restaurantInfo?.info?.id}>    
    <div className="w-54 h-82 transform transition duration-200 hover:scale-95">
        <img className="flex-none h-36 w-54 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restaurantInfo?.info?.cloudinaryImageId}></img>
            <div className="w-[95%] mx-auto mt-3">
                <div className="font-bold">{restaurantInfo?.info?.name}</div>
                    <div className="flex font-semibold ">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-6" // Tailwind size classes - adjust as needed
                        >
                            {/* Black circular background */}
                            <circle cx="12" cy="12" r="12" fill="#000" />
                            
                            {/* Green star icon */}
                            <path
                            d="M12 4L14.472 9.52796H20L15.264 13.056L17.736 18.584L12 15.056L6.264 18.584L8.736 13.056L4 9.52796H9.528L12 4Z"
                            fill="#4ADE80" // Tailwind green-400 equivalent
                            />
                     </svg>
                        <span className="ml-1">{restaurantInfo?.info?.avgRating}</span>
                        <span className="ml-3">{restaurantInfo?.info?.sla?.slaString}</span>
                    </div>
                    <div className="font-semibold text-gray-600 overflow-hidden">{restaurantInfo?.info?.cuisines?.join(", ")}</div>
                    <div className="font-semibold">{restaurantInfo?.info?.areaName}</div>
                    
            </div>
    </div>
    </Link>
    )
}
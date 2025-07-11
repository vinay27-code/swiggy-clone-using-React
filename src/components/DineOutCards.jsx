export default function DineOutCards({restaurantData}){
    return(
        <>
            <div className="rounded-xl flex-none mb-10 ">
                <a href={restaurantData?.cta?.link} target="_blank">
                   <div className="relative h-47 w-87"> {/* Match image dimensions */}
        <img className="h-full w-full rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restaurantData?.info?.mediaFiles[0]?.url} />
        
        {/* Gradient overlay - now properly constrained to image dimensions */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
        
        <p className="font-bold absolute bottom-3 left-0 text-white ml-2">{restaurantData?.info?.name}</p> 
        <p className="font-bold absolute bottom-3 right-6 text-white">★ {restaurantData?.info?.rating?.value}</p>                   
    </div>
        <div className="bg-gray-50 mt-2" >
            <div className="flex justify-between items-center font-serif">
                <p>{restaurantData?.info?.cuisines.join(", ")}</p>
                <p>{restaurantData?.info?.costForTwo}</p>
            </div>
            <div className="flex justify-between items-center font-serif">
                <p>{restaurantData?.info?.locationInfo?.formattedAddress}</p>
                <p>{restaurantData?.info?.locationInfo?.distanceString}</p>
            </div>
            <div className="font-serif">Table booking</div>
            <div className="bg-[#1ba672] flex justify-between items-center rounded mb-2 font-serif">
                <p className="font-bold text-white">{restaurantData?.info?.offerInfoV2?.otherOffers?.offers[0]?.header}</p>
                <p className="font-bold text-white">{restaurantData?.info?.offerInfoV2?.otherOffers?.offers[0]?.availabilityDescription}</p>
            </div>
            <div className="bg-[#1ba672] rounded font-serif">
                <p className="font-bold text-white">{restaurantData?.info?.vendorOffer?.infos[0]?.description}</p>
            </div>
        </div>


    </a>
            </div>
        </>
    )
}
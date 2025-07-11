export default function DineOutCards({ restaurantData }) {
    return (
        <div className="flex-none w-[300px] sm:w-[350px] rounded-xl mb-8 bg-white shadow-md">
            <a href={restaurantData?.cta?.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48 w-full">
                    <img
                        className="h-full w-full object-cover rounded-t-xl"
                        src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            restaurantData?.info?.mediaFiles[0]?.url
                        }
                        alt={restaurantData?.info?.name}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
                    <p className="font-bold absolute bottom-3 left-3 text-white text-sm sm:text-base">
                        {restaurantData?.info?.name}
                    </p>
                    <p className="font-bold absolute bottom-3 right-3 text-white text-sm sm:text-base">
                        ★ {restaurantData?.info?.rating?.value}
                    </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-b-xl space-y-2 text-sm sm:text-base">
                    <div className="flex justify-between items-center font-serif">
                        <p className="truncate w-[70%]">{restaurantData?.info?.cuisines.join(", ")}</p>
                        <p>{restaurantData?.info?.costForTwo}</p>
                    </div>

                    <div className="flex justify-between items-center font-serif">
                        <p className="truncate w-[70%]">{restaurantData?.info?.locationInfo?.formattedAddress}</p>
                        <p>{restaurantData?.info?.locationInfo?.distanceString}</p>
                    </div>

                    <div className="font-serif text-gray-700">Table booking</div>

                    {restaurantData?.info?.offerInfoV2?.otherOffers?.offers[0] && (
                        <div className="bg-[#1ba672] px-2 py-1 rounded flex justify-between text-white font-serif text-xs sm:text-sm">
                            <p>{restaurantData?.info?.offerInfoV2?.otherOffers?.offers[0]?.header}</p>
                            <p>{restaurantData?.info?.offerInfoV2?.otherOffers?.offers[0]?.availabilityDescription}</p>
                        </div>
                    )}

                    {restaurantData?.info?.vendorOffer?.infos[0]?.description && (
                        <div className="bg-[#1ba672] px-2 py-1 rounded text-white font-serif text-xs sm:text-sm">
                            <p>{restaurantData?.info?.vendorOffer?.infos[0]?.description}</p>
                        </div>
                    )}
                </div>
            </a>
        </div>
    );
}

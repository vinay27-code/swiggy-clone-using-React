import { Link } from "react-router";

export default function RestaurantCards({ restaurantInfo }) {
  return (
    <Link to={`/city/delhi/${restaurantInfo?.info?.id}`}>
      <div className="w-full sm:w-64 h-auto transform transition duration-200 hover:scale-95 p-2">
        <img
          className="h-36 w-full object-cover rounded-xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restaurantInfo?.info?.cloudinaryImageId
          }
          alt={restaurantInfo?.info?.name}
        />
        <div className="w-full mt-3">
          <div className="font-bold text-base sm:text-lg truncate">
            {restaurantInfo?.info?.name}
          </div>
          <div className="flex items-center text-sm font-semibold mt-1 space-x-3">
            <div className="flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#000" />
                <path
                  d="M12 4L14.472 9.52796H20L15.264 13.056L17.736 18.584L12 15.056L6.264 18.584L8.736 13.056L4 9.52796H9.528L12 4Z"
                  fill="#4ADE80"
                />
              </svg>
              <span className="ml-1">{restaurantInfo?.info?.avgRating}</span>
            </div>
            <span>{restaurantInfo?.info?.sla?.slaString}</span>
          </div>
          <div className="text-gray-600 text-sm mt-1 truncate">
            {restaurantInfo?.info?.cuisines?.join(", ")}
          </div>
          <div className="font-semibold text-sm truncate">
            {restaurantInfo?.info?.areaName}
          </div>
        </div>
      </div>
    </Link>
  );
}

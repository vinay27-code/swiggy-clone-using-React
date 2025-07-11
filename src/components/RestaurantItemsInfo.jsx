import { addItems, decreaseQuantity, increaseQuantity } from "../cartStore/cartSlice";  
import { useDispatch, useSelector } from "react-redux";

export default function RestaurantItemsInfo({ restaurantItems }) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const itemInCart = items.find(item => item.id === restaurantItems.id);
    const count = itemInCart ? itemInCart.quantity : 0;

    const addToCart = () => dispatch(addItems(restaurantItems));
    const handleIncrement = () => dispatch(increaseQuantity(restaurantItems));
    const handleDecrement = () => dispatch(decreaseQuantity(restaurantItems));

    return (
        <>
            <div className="flex flex-col sm:flex-row w-full justify-between mb-6 gap-4">
                {/* Item details */}
                <div className="sm:w-[70%] w-full">
                    <p className="text-lg sm:text-xl font-semibold text-gray-800">{restaurantItems?.name}</p>
                    <p className="text-md sm:text-lg text-gray-700">₹{restaurantItems?.price / 100}</p>
                    {(restaurantItems?.ratings?.aggregatedRating?.rating || restaurantItems?.ratings?.aggregatedRating?.ratingCountV2) && (
                        <p className="text-green-500 text-sm mt-1">
                            {restaurantItems?.ratings?.aggregatedRating?.rating && `★ ${restaurantItems.ratings.aggregatedRating.rating}`}
                            {restaurantItems?.ratings?.aggregatedRating?.ratingCountV2 && ` (${restaurantItems.ratings.aggregatedRating.ratingCountV2})`}
                        </p>
                    )}
                    <p className="text-sm text-gray-600 mt-1">{restaurantItems?.description}</p>
                </div>

                {/* Image + Add to cart */}
                <div className="sm:w-[20%] w-full relative h-40">
                    <img
                        className="w-full h-36 object-cover rounded-xl"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurantItems?.imageId}`}
                        alt={restaurantItems?.name}
                    />
                    {count === 0 ? (
                        <button
                            onClick={addToCart}
                            className="absolute bottom-2 left-1/2 -translate-x-1/2 text-green-500 px-4 py-2 bg-white rounded-xl text-sm sm:text-lg font-semibold shadow-md hover:bg-gray-100"
                        >
                            ADD
                        </button>
                    ) : (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3 items-center px-4 py-2 bg-white rounded-xl font-bold text-green-500 shadow-md">
                            <button onClick={handleDecrement} className="text-xl hover:text-red-500">−</button>
                            <span>{count}</span>
                            <button onClick={handleIncrement} className="text-xl hover:text-green-600">+</button>
                        </div>
                    )}
                </div>
            </div>
            <hr className="border-gray-200 my-4" />
        </>
    );
}

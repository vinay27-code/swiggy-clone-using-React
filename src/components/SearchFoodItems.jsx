import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, increaseQuantity, decreaseQuantity } from "../cartStore/cartSlice";

export default function SearchFoodItems() {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [menuData, setMenuData] = useState(null);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      try {
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();
        const temporaryData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filteredData = temporaryData.filter((items) => 'title' in items?.card?.card);
        setMenuData(filteredData);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    }

    fetchData();
  }, [id]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredItems([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const lowerCaseQuery = query.toLowerCase();

    const allItems = menuData?.flatMap((category) =>
      category?.card?.card?.itemCards?.map(item => ({
        ...item?.card?.info,
        category: category?.card?.card?.title
      })) || []
    );

    const results = allItems?.filter(item =>
      item?.name?.toLowerCase().includes(lowerCaseQuery) ||
      item?.description?.toLowerCase().includes(lowerCaseQuery) ||
      item?.category?.toLowerCase().includes(lowerCaseQuery)
    ) || [];

    setFilteredItems(results);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getItemCount = (id) => {
    const item = cartItems.find(item => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto mt-10">
      <div className="mb-10">
        <input
          className="w-full pl-6 pr-4 py-4 text-lg sm:text-xl bg-gray-100 rounded-2xl shadow-inner outline-none"
          type="text"
          placeholder="Search for dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
      </div>

      {isSearching ? (
        <div>
          {filteredItems.length > 0 ? (
            <div className="space-y-6">
              {filteredItems.map((item, index) => {
                const count = getItemCount(item.id);
                return (
                  <div key={`${item.id}-${item.category}-${index}`} className="border-b pb-6">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div className="sm:w-[70%]">
                        <p className="text-lg sm:text-xl font-semibold text-gray-800">{item.name}</p>
                        <p className="text-md text-gray-700">₹{item.price / 100}</p>
                        {item.ratings?.aggregatedRating?.rating && (
                          <span className="text-green-500 text-sm">
                            ★ {item.ratings.aggregatedRating.rating}
                          </span>
                        )}
                        {item.ratings?.aggregatedRating?.ratingCountV2 && (
                          <span className="text-gray-500 ml-1">
                            ({item.ratings.aggregatedRating.ratingCountV2})
                          </span>
                        )}
                        {item.description && (
                          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                        )}
                        <p className="text-sm text-gray-400 mt-1">Category: {item.category}</p>
                      </div>

                      <div className="sm:w-[20%] w-full relative h-36">
                        {item.imageId && (
                          <img
                            className="w-full h-full object-cover rounded-xl"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                            alt={item.name}
                          />
                        )}
                        {count === 0 ? (
                          <button
                            className="absolute bottom-2 left-1/2 -translate-x-1/2 text-green-500 px-4 py-2 bg-white rounded-xl font-bold shadow hover:bg-gray-100"
                            onClick={() => dispatch(addItems(item))}
                          >
                            ADD
                          </button>
                        ) : (
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-2 flex items-center gap-3 font-bold text-green-500 shadow">
                            <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                            <span>{count}</span>
                            <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-500 text-lg">
              {searchQuery ? "No dishes found matching your search." : "Start typing to search for dishes."}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500 text-lg">
          Search for dishes by name, description, or category
        </div>
      )}
    </div>
  );
}

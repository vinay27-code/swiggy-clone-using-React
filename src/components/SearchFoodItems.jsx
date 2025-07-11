import { useParams } from "react-router";
import { useState, useEffect } from "react";
import RestaurantItemsInfo from "./RestaurantItemsInfo";

export default function SearchFoodItems() {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [menuData, setMenuData] = useState(null);

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

    // Flatten all menu items from all categories
    const allItems = menuData?.flatMap((category) => 
      category?.card?.card?.itemCards?.map(item => ({
        ...item?.card?.info,
        category: category?.card?.card?.title
      })) || []
    );

    // Filter items based on search query
    const results = allItems?.filter(item => 
      item?.name?.toLowerCase().includes(lowerCaseQuery) ||
      item?.description?.toLowerCase().includes(lowerCaseQuery) ||
      item?.category?.toLowerCase().includes(lowerCaseQuery)
    ) || [];

    setFilteredItems(results);
  };

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="mb-10">
        <input
          className="w-full pl-10 py-4 text-xl bg-gray-200 rounded-2xl"
          type="text"
          placeholder="Search for dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
      </div>

      {isSearching ? (
        <div className="search-results">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredItems.map((item, index) => (
  <div key={`${item.id}-${item.category}-${index}`} className="border-b pb-6">
                  <div className="flex justify-between">
                    <div className="w-[70%]">
                      <p className="text-xl font-semibold text-gray-600">{item.name}</p>
                      <p className="text-lg">₹{item.price / 100}</p>
                      <span className="text-green-500">
                        {item?.ratings?.aggregatedRating?.rating ? `★${item.ratings.aggregatedRating.rating}` : ''}
                      </span>
                      <span>
                        {item?.ratings?.aggregatedRating?.ratingCountV2 ? `(${item.ratings.aggregatedRating.ratingCountV2})` : ''}
                      </span>
                      {item.description && (
                        <p className="text-gray-500 mt-1">{item.description}</p>
                      )}
                      <p className="text-sm text-gray-400 mt-1">Category: {item.category}</p>
                    </div>
                    <div className="w-[20%] relative">
                      {item.imageId && (
                        <img
                          className="w-full h-36 object-cover rounded-xl"
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                          alt={item.name}
                        />
                      )}
                      <button className="absolute bottom-2 left-17 text-green-400 px-4 py-2 bg-white rounded-xl ml-7">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl text-gray-500">
                {searchQuery ? 'No dishes found matching your search.' : 'Type to search for dishes'}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-gray-500">Search for dishes by name, description, or category</p>
        </div>
      )}
    </div>
  );
}
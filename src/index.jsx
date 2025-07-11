import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantsList from "./components/RestaurantsList";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantMenu";
import SearchFoodItems from "./components/SearchFoodItems";
import RestaurantHeader from "./components/RestaurantHeader";
import HeaderPages from "./components/HeaderPages";
import { Provider } from "react-redux";
import { store } from "./cartStore/cartStore";
import CheckOut from "./components/CheckOut";
import Banner from "./components/Banner";

function Index() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Banner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<HeaderPages />}>
              <Route path="/restaurants" element={<RestaurantsList />} />
              <Route path="/city/delhi/:id" element={<RestaurantMenu />} />
              <Route path="/city/delhi/:id/search" element={<SearchFoodItems />} />
            </Route>
            <Route path="/checkOut" element={<CheckOut />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);

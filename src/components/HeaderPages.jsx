import { Outlet } from "react-router";
import RestaurantHeader from "./RestaurantHeader";

export default function HeaderPages(){
    return(
        <>
        <RestaurantHeader/>
        <Outlet/>
        </>
    )
}
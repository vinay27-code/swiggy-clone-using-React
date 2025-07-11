import FoodOptions from "./FoodOptions";

export default function FoodCards({foodData}){
    return(
        <>
        <a href={foodData?.action?.link} target="_blank">
        <img className="h-45 w-36" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        </>
    )
}
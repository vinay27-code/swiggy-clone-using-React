import GroceryOptions from "./GroceryOptions";
export default function GroceryCards({groceryData}){
    return(
        <>
            {
                <div className="flex-none mr-3 mb-10">
                <a href={groceryData?.action?.link} target="_blank">
                <img className="h-45 w-36" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+groceryData?.imageId}></img>
                <h2 className="font-bold overflow-auto text-center mt-1">{groceryData?.action?.text}</h2>
                </a>
                </div>
                
                
            }
        </>
    )
}
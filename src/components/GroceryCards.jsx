export default function GroceryCards({ groceryData }) {
    return (
        <div className="flex-none w-36 sm:w-40 md:w-44 mr-3 mb-6">
            <a href={groceryData?.action?.link} target="_blank" rel="noopener noreferrer">
                <img
                    className="h-40 sm:h-44 md:h-48 w-full object-cover rounded-lg"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${groceryData?.imageId}`}
                    alt={groceryData?.action?.text}
                />
                <h2 className="font-semibold text-sm sm:text-base text-center mt-2 truncate">
                    {groceryData?.action?.text}
                </h2>
            </a>
        </div>
    );
}

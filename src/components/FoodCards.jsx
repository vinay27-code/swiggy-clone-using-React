export default function FoodCards({ foodData }) {
    return (
        <a href={foodData?.action?.link} target="_blank" rel="noopener noreferrer">
            <img
                className="h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-48 lg:w-48 object-cover rounded-lg transition-transform duration-200 hover:scale-105"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`}
                alt={foodData?.accessibility?.altText || "Food Item"}
            />
        </a>
    );
}

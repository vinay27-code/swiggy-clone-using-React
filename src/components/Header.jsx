import { Link } from "react-router";

export default function Header() {
    return (
        <header className="bg-[#ff5200] font-serif text-[#fff]">
            {/* image and buttons div */}
            <div className="flex flex-col sm:flex-row justify-between container mx-auto py-6 px-4 sm:px-12 gap-4 sm:gap-0">
                <a href="/">
                    <img
                        className="w-32 h-10 sm:w-40 sm:h-12 mx-auto sm:mx-0"
                        src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
                        alt="Swiggy"
                    />
                </a>
                {/* buttons div */}
                <div className="text-[#fff] font-bold flex flex-col sm:flex-row gap-4 sm:gap-10 items-center justify-center sm:justify-end">
                    <a target="_blank" href="https://www.swiggy.com/corporate/" rel="noreferrer">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy" rel="noreferrer">Partner with us</a>
                    <a target="_blank" rel="noreferrer" className="border px-3 py-2 rounded-xl" href="https://partner.swiggy.com/login#/swiggy">Get the App</a>
                </div>
            </div>

            {/* Search banner */}
            <div className="relative px-4 sm:px-16 py-8 text-center">
                <img className="hidden md:block h-40 sm:h-110 w-32 sm:w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="Veggies" />
                <img className="hidden md:block h-40 sm:h-110 w-32 sm:w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="Sushi" />

                <div className="max-w-full sm:max-w-[60%] mx-auto font-bold text-2xl sm:text-5xl leading-tight">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>

                <div className="container mx-auto max-w-full sm:max-w-[70%] flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 sm:mt-10 px-2">
                    <input className="w-full sm:w-[35%] h-12 px-4 py-2 text-base sm:text-xl bg-white text-black rounded-xl" type="text" placeholder="Delhi, India" />
                    <input className="w-full sm:w-[55%] h-12 px-4 py-2 text-base sm:text-xl bg-white text-black rounded-xl" type="text" placeholder="Search for restaurants, items and more" />
                </div>
            </div>

            {/* Navigation banners */}
            <div className="max-w-full sm:max-w-[75%] container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-6">
                <Link to="/restaurants">
                    <img className="w-full sm:w-80 h-40 sm:h-75 rounded-lg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="Restaurants" />
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" target="_blank" rel="noreferrer">
                    <img className="w-full sm:w-80 h-40 sm:h-75 rounded-lg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="Instamart" />
                </a>
                <a href="https://www.swiggy.com/dineout" target="_blank" rel="noreferrer">
                    <img className="w-full sm:w-80 h-40 sm:h-75 rounded-lg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="Dineout" />
                </a>
            </div>
        </header>
    );
}

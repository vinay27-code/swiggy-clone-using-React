import { Link } from "react-router"
export default function Header(){
    return(
        <header className="bg-[#ff5200] font-serif text-[#fff]">
            {/* image and buttons div */}
            <div className="flex justify-between container mx-auto py-8">
                <a href="/">
                <img className="w-40 h-12 mx-20" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                </a>
                {/* buttons div */}
                <div className="text-[#fff] font-bold flex gap-10 px-5 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a target="_blank" className="border-1 px-3 py-4 rounded-2xl" href="https://partner.swiggy.com/login#/swiggy">Get the App</a>
                </div>
            </div>
            <div className="px-16 py-8 relative">
                <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
                <div className="max-w-[60%] font-bold container mx-auto text-center text-5xl">Order food & groceries. Discover best restaurants. Swiggy it!</div>
                <div className="container mx-auto max-w-[70%] flex gap-5 mt-10">
                    <input className="w-[35%] h-15 px-5 py-5 text-xl bg-white text-black rounded-xl" type="text" placeholder="Delhi, India"/>
                    <input className="w-[55%] h-15 px-5 py-5 text-xl bg-white text-black rounded-xl" type="text" placeholder="search for restaurants, items and more"/>
                </div>
            </div>
            <div className="max-w-[75%] container mx-auto flex  justify-center">
                <Link to="/restaurants">
                    <img className="w-81 h-75" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" target="_blank">
                                    <img className="w-81 h-75" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
                </a>
                <a href="https://www.swiggy.com/dineout" target="_blank">
                                   <img className="w-81 h-75"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
                </a>
            </div>
        </header>
    )
}
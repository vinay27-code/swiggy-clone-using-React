import { useSelector } from "react-redux"
import { Link } from "react-router";

export default function RestaurantHeader(){

const counter=useSelector(state=>state.cart.count);

    return(
        <>
            <div className="bg-gray-100  font-serif text-black container mx-auto py-2 px-8  text-lg flex justify-between items-center">
                <div>
                    <a href="/">
                         <img className="w-40 h-12 mx-20 bg-[#ff5200] rounded-2xl" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                     </a>
                </div>
                <div className=" font-bold flex gap-10 px-5 items-center">
                    <div className="flex gap-1 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    </div>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <div className="flex gap-0 items-center">
                    <a target="_blank" className="px-3 py-4 rounded-2xl" href="https://www.swiggy.com/support">Help</a>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Link to="/checkOut">
                        <p>Cart <span className=" text-[#ff5200]">{"("+`${counter}`+")"}</span></p>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function RestaurantHeader() {
    const counter = useSelector(state => state.cart.count);

    return (
        <div className="bg-gray-100 font-serif text-black w-full px-4 sm:px-8 py-2">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
                {/* Logo */}
                <a href="/" className="flex-shrink-0">
                    <img
                        className="w-36 h-10 sm:w-40 sm:h-12 bg-[#ff5200] rounded-2xl"
                        src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
                        alt="Swiggy Logo"
                    />
                </a>

                {/* Menu */}
                <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm sm:text-base font-bold items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/" rel="noopener noreferrer">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy" rel="noopener noreferrer">Partner with us</a>
                    <a target="_blank" href="https://www.swiggy.com/support" rel="noopener noreferrer" className="px-3 py-2 rounded-2xl bg-white hover:bg-gray-200">Help</a>
                    <Link to="/checkOut" className="text-[#ff5200] hover:underline">
                        Cart <span>({counter})</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

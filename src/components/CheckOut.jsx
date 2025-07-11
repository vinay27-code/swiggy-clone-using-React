import React, { useState } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, clearCart } from "../cartStore/cartSlice";
import { Link } from "react-router";

export default function CheckOut() {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const totalAmount = cartItems.reduce(
        (sum, item) => sum + (item.price / 100) * item.quantity,
        0
    );

    const handlePlaceOrder = () => {
        console.log("Order placed:", cartItems);
        setOrderPlaced(true);
        setTimeout(() => {
            dispatch(clearCart());
        }, 3000);
    };

    if (orderPlaced) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
                    <p>Your food will be delivered soon. Thank you for ordering!</p>
                </div>
                <Link to="/restaurants">
                    <p className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">Browse More Restaurants</p>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">Your Cart</h1>
            
            {cartItems.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-lg sm:text-xl text-gray-500">Your cart is empty</p>
                    <a 
                        href="/restaurants" 
                        className="mt-4 inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                    >
                        Browse Restaurants
                    </a>
                </div>
            ) : (
                <>
                    <div className="space-y-6 mb-8">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-6 gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">₹{(item.price / 100).toFixed(2)}</p>
                                    {item.description && (
                                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                                    )}
                                </div>
                                
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                                        <button 
                                            onClick={() => dispatch(decreaseQuantity(item))}
                                            className="text-lg font-bold text-gray-600 hover:text-orange-500"
                                        >
                                            -
                                        </button>
                                        <span className="font-medium">{item.quantity}</span>
                                        <button 
                                            onClick={() => dispatch(increaseQuantity(item))}
                                            className="text-lg font-bold text-gray-600 hover:text-orange-500"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="font-medium text-right w-full sm:w-20">
                                        ₹{((item.price / 100) * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t pt-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold">Total Amount</h3>
                            <p className="text-2xl font-bold">₹{totalAmount.toFixed(2)}</p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => dispatch(clearCart())}
                                className="w-full sm:w-1/2 bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                            >
                                Clear Cart
                            </button>
                            <button 
                                onClick={handlePlaceOrder}
                                className="w-full sm:w-1/2 bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

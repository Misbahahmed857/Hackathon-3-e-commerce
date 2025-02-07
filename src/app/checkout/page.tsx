'use client';

import React from 'react';

export default function CheckoutPage() {
    const handlePlaceOrder = (event: React.FormEvent) => {
        event.preventDefault();
        alert('Order placed successfully!');
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Checkout</h1>
                <form onSubmit={handlePlaceOrder} className="space-y-6">
                    {/* Billing Details */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Billing Details</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-600 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-gray-600 mb-2">Shipping Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your shipping address"
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Delivery Options */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Delivery Options</h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="standard"
                                    name="delivery"
                                    value="standard"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                    defaultChecked
                                />
                                <label htmlFor="standard" className="ml-3 text-gray-600">
                                    Standard Delivery (3-5 business days)
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="express"
                                    name="delivery"
                                    value="express"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="express" className="ml-3 text-gray-600">
                                    Express Delivery (1-2 business days)
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="pickup"
                                    name="delivery"
                                    value="pickup"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="pickup" className="ml-3 text-gray-600">
                                    In-Store Pickup (Same day)
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Additional Details */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Additional Details</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="notes" className="block text-gray-600 mb-2">Order Notes (Optional)</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Add any special instructions for your order"
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-600 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </main>
    );
}
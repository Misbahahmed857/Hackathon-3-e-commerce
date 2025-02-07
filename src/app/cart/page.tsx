"use client";

import BreadcrumbCart from "@/components/ProductCard-page/BreadcrumbCart";
import ProductCard from "@/components/ProductCard-page/ProductCard";
import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { modernSans } from "@/styles/fonts";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import React from "react";
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks/redux";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CartPage() {
  const { cart, totalPrice, adjustedTotalPrice } = useAppSelector(
    (state: RootState) => state.carts
  );

  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <main className="pb-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 xl:px-0 py-10">
        {cart && cart.items.length > 0 ? (
          <>
            <BreadcrumbCart />
            <h2 className={cn([modernSans.className, "text-3xl font-extrabold text-gray-900 mb-6"]) }>
              Shopping Cart
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
                {cart?.items.map((product, idx, arr) => (
                  <React.Fragment key={idx}>
                    <ProductCard data={product} />
                    {arr.length - 1 !== idx && <hr className="border-gray-300 my-4" />}
                  </React.Fragment>
                ))}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h6 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h6>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-medium">${totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Discount (-{Math.round(((totalPrice - adjustedTotalPrice) / totalPrice) * 100)}%)</span>
                    <span className="text-red-500 font-medium">-${Math.round(totalPrice - adjustedTotalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${Math.round(adjustedTotalPrice)}</span>
                  </div>
                </div>
                <div className="flex space-x-3 mt-4">
                  <InputGroup className="bg-gray-100">
                    <InputGroup.Text>
                      <MdOutlineLocalOffer className="text-gray-500 text-2xl" />
                    </InputGroup.Text>
                    <InputGroup.Input
                      type="text"
                      name="code"
                      placeholder="Promo code"
                      className="bg-transparent placeholder-gray-500"
                    />
                  </InputGroup>
                  <Button className="bg-blue-600 text-white rounded-lg px-4 py-2">Apply</Button>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full mt-4 bg-indigo-600 text-white font-medium py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition"
                >
                  <span>Proceed to Checkout</span>
                  <FiArrowRight className="text-lg" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-700">
            <div className="p-8 bg-white rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
              <p className="mt-2 text-gray-500">Start shopping now to add items to your cart.</p>
              <Button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition" asChild>
                <Link href="/shop">Explore Products</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

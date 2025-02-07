'use client';

import React, { useState } from "react";
import { Product } from "@/app/APIArray/product.types";
import ProductCard from "./CardItem";
import Link from "next/link";
import { integralCF } from "@/styles/fonts";

type ListingProductProps = {
  title: string;
  data: Product[];
  viewAllLink?: string;
};

const ListingProduct = ({ title, data, viewAllLink }: ListingProductProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % Math.ceil(data.length / 3)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + Math.ceil(data.length / 3)) % Math.ceil(data.length / 3)
    );
  };

  return (
    <section className="max-w-frame mx-auto text-center">
      {/* Main Heading with integralCF Font */}
      <h2
        className={`text-[32px] md:text-5xl mb-8 md:mb-14 font-bold capitalize ${integralCF.className}`}
      >
        {title}
      </h2>

      {/* Custom Carousel */}
      <div className="relative w-full mb-6 md:mb-9 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {data.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[calc(100%/3)] sm:w-[calc(100%/4)] h-auto mx-2 rounded-lg overflow-hidden"
              style={{
                background: "transparent",
              }}
            >
              <ProductCard data={product} />
            </div>
          ))}
        </div>

        {/* Transparent Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/3 left-2 transform -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-2 rounded-full shadow-md transition-all focus:outline-none"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/3 right-2 transform -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-2 rounded-full shadow-md transition-all focus:outline-none"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* View All Link */}
      {viewAllLink && (
        <div className="w-full px-4 sm:px-0 text-center">
          <Link
            href={viewAllLink}
            className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10"
          >
            View All
          </Link>
        </div>
      )}
    </section>
  );
};

export default ListingProduct;
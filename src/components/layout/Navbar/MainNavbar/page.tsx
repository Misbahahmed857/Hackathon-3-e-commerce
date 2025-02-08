"use client";

import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./OtherTopNavbar"; // Importing ResTopNavbar
import CartBtn from "./ButtonCard";
import  createClient  from "@sanity/client";
import { FiSearch } from "react-icons/fi";

// Initialize Sanity Client
const client = createClient({
  projectId: "f21lx1r0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
});

const navMenuData = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "Shop", url: "/shop" },
  { id: 3, label: "On Sale", url: "/shop" },
  { id: 4, label: "New Arrivals", url: "/shop" },
  { id: 5, label: "Brands", url: "/shop" },
];

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: { current: string }; // Updated slug type
}

const MainNavbar = () => {
  const [searchQuery, setSearchQuery] = useState<string>(""); // Store the current search query
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>(""); // Debounced search query
  const [searchResults, setSearchResults] = useState<Product[]>([]); // Store the search results
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Handle the search query change
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Implement debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); // Wait for 500ms after typing stops

    return () => clearTimeout(timer); // Cleanup the timeout on each render
  }, [searchQuery]);

  // Function to handle API search call
  const handleApiSearch = async (query: string): Promise<void> => {
    setLoading(true);
    setError(null); // Reset error state on new search

    try {
      const queryParams = { query: `${query}*` };

      const results = await client.fetch(
        `*[_type == "product" && name match $query]{
          _id,
          name,
          price,
          "imageUrl": image.asset->url,
          slug
        }`,
        queryParams as Record<string, string>
      );

      // Filter unique products
      const uniqueResultsMap = new Map<string, Product>();
      results.forEach((result: Product) => {
        if (!uniqueResultsMap.has(result._id)) {
          uniqueResultsMap.set(result._id, result);
        }
      });

      // Set unique results
      setSearchResults(Array.from(uniqueResultsMap.values()));
    } catch (error) {
      setError("There was an error fetching the products. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Trigger search after the debounce delay
  useEffect(() => {
    if (debouncedSearchQuery.length > 2) {
      handleApiSearch(debouncedSearchQuery);
    } else {
      setSearchResults([]); // Clear results if query is too short
    }
  }, [debouncedSearchQuery]);

  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={navMenuData} />
          </div>
          <Link
            href="/"
            className={cn([integralCF.className, "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10"])}
          >
            SHOP.CO
          </Link>
        </div>

        <div className="hidden md:flex items-center ml-10 space-x-6 whitespace-nowrap">
          <Link href="/shop" className="text-black text-sm relative group">Shop</Link>
          <Link href="/shop" className="text-gray-700 text-sm relative group">On Sale</Link>
          <Link href="/shop" className="text-gray-700 text-sm relative group">New Arrivals</Link>
          <Link href="/shop" className="text-gray-700 text-sm relative group">Brands</Link>
        </div>
        
        <div className="flex items-center ml-auto space-x-4">

        <div className="flex items-center md:hidden">
        {!isSearchOpen ? (
          <FiSearch
            className="text-black mx-1 text-xl  cursor-pointer"
            onClick={() => setIsSearchOpen(true)}
          />
        ) : (
          <div className="flex justify-start items-center w-full h-[40px] rounded-[62px] bg-[#F0F0F0] border-gray-300 placeholder-gray-400">
            <FiSearch className="text-xl ml-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full h-full bg-[#F0F0F0] rounded-[62px] outline-none ml-2"
            />
            <button
              className="ml-2 text-gray-500"
              onClick={() => setIsSearchOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>



          <InputGroup className="hidden md:flex bg-[#F0F0F0] w-[580px]">
            <InputGroup.Text>
              <Image
                priority
                src="/icons/search.svg"
                height={20}
                width={20}
                alt="search"
                className="min-w-5 min-h-5"
              />
            </InputGroup.Text>
            <InputGroup.Input
              type="search"
              name="search"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-transparent placeholder:text-black/40"
            />
          </InputGroup>

          {/* Search Results Dropdown with Scroll */}
          {searchQuery.length > 2 && (
            <div className="absolute top-16 bg-white w-[580px] shadow-lg rounded-lg p-4 z-30 max-h-[300px] overflow-y-auto">
              {loading ? (
                <p className="text-center">Loading...</p>
              ) : error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : searchResults.length > 0 ? (
                searchResults.map((result: Product) => (
                  <Link
                    href={`/product/${result.slug.current}`}
                    key={result._id}
                    className="flex items-center p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <Image
                      src={result.imageUrl}
                      alt={result.name}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-medium">{result.name}</p>
                      <p className="text-sm text-gray-600">${result.price}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center text-gray-500">No results found.</p>
              )}
            </div>
          )}
          <CartBtn />
          <Link href="/auth" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="user"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
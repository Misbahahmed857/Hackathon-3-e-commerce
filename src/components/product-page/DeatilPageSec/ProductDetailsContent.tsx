import React from "react";
import { 
  FaTshirt, FaPalette, FaRuler, FaTag, FaWeightHanging, FaBox, FaGlobeAmericas, FaHandHoldingWater 
} from "react-icons/fa";

export type SpecItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

const specsData: SpecItem[] = [
  {
    label: "Material",
    value: "Premium Cotton Blend",
    icon: <FaTshirt className="text-xl text-blue-500" />,
  },
  {
    label: "Design",
    value: "Sporty Tape Details on Sleeves",
    icon: <FaTag className="text-xl text-green-500" />,
  },
  {
    label: "Fit",
    value: "Regular / Slim / Oversized",
    icon: <FaRuler className="text-xl text-orange-500" />,
  },
  {
    label: "Available Colors",
    value: "Black, White, Navy Blue, Gray",
    icon: <FaPalette className="text-xl text-purple-500" />,
  },
  {
    label: "Weight",
    value: "Lightweight (250g)",
    icon: <FaWeightHanging className="text-xl text-red-500" />,
  },
  {
    label: "Packaging",
    value: "Eco-friendly Recyclable Bag",
    icon: <FaBox className="text-xl text-teal-500" />,
  },
  {
    label: "Origin",
    value: "Made in Italy",
    icon: <FaGlobeAmericas className="text-xl text-yellow-500" />,
  },
  {
    label: "Care Instructions",
    value: "Machine Wash Cold, Tumble Dry Low",
    icon: <FaHandHoldingWater className="text-xl text-blue-400" />,
  },
];

const ProductDetails = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-8">
      {/* Product Name */}
      <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">
        Product Specifications
      </h2>

      {/* Product Description */}
      <p className="text-lg text-gray-700 text-center">
        A stylish and sporty T-shirt featuring contrast tape details on the sleeves. 
        Designed for everyday wear, perfect for casual outings, workouts, and street fashion. 
        Available in multiple colors and fits.
      </p>

      {/* Product Specifications List */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">Product Details</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {specsData.map((item, i) => (
            <li key={i} className="flex items-center space-x-3">
              <span className="text-2xl">{item.icon}</span>
              <p>
                <strong>{item.label}:</strong> {item.value}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Details Footer */}
      <div className="border-t pt-6 text-center">
        <p className="text-sm text-gray-500">
          Crafted with premium materials for comfort and durability. 
          A must-have addition to your wardrobe!
        </p>
      </div>
    </section>
  );
};

export default ProductDetails;

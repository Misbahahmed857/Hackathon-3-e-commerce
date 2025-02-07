import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ReviewCard from "@/components/CardProductItem/CustomerReviewCard";
import { reviewsData } from "@/app/page";
import Link from "next/link";

const ReviewsContent = () => {
  const [selectedOption, setSelectedOption] = useState("Latest");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  const handleWriteReview = () => {
    setIsModalOpen(true); // Open the modal to write a review
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setReviewText(""); // Reset the review text
  };

  const handleReviewSubmit = () => {
    if (reviewText.trim()) {
      alert("Review Submitted: " + reviewText); // You can replace this with actual submission logic
      setReviewText(""); // Reset the review input
      handleCloseModal(); // Close the modal after submission
    } else {
      alert("Please write a review before submitting.");
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between flex-col sm:flex-row mb-5 sm:mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-black mr-2">
            All Reviews
          </h3>
          <span className="text-sm sm:text-base text-black/60">(451)</span>
        </div>
        <div className="flex items-center space-x-2.5">
          <div className="relative">
            <button
              type="button"
              className="min-w-[120px] font-medium text-xs sm:text-base px-4 py-3 sm:px-5 sm:py-4 text-black bg-[#F0F0F0] border-none rounded-full h-12"
              onClick={() =>
                document
                  .getElementById("dropdown-menu")
                  ?.classList.toggle("hidden")
              }
            >
              {selectedOption}
            </button>
            <ul
              id="dropdown-menu"
              className="hidden absolute left-0 mt-2 w-full bg-white shadow-md rounded-lg z-10"
            >
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect("Latest")}
              >
                Latest
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect("Most Relevant")}
              >
                Most Relevant
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect("Oldest")}
              >
                Oldest
              </li>
            </ul>
          </div>

          <Button
            type="button"
            className="sm:min-w-[166px] px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-black font-medium text-xs sm:text-base h-12"
            onClick={handleWriteReview}
          >
            Write a Review
          </Button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 sm:mb-9">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} data={review} isAction isDate />
        ))}
      </div>

      {/* Load More Reviews Button */}
      <div className="w-full px-4 sm:px-0 text-center">
        <Link
          href="#"
          className="inline-block w-[230px] px-11 py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10"
        >
          Load More Reviews
        </Link>
      </div>

      {/* Modal for Writing a Review */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-w-full">
            <h3 className="text-xl font-bold mb-4">Write a Review</h3>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here..."
              className="w-full h-40 p-4 border rounded-lg mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-300 rounded-lg text-black"
              >
                Cancel
              </button>
              <button
                onClick={handleReviewSubmit}
                className="px-4 py-2 bg-black text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewsContent;
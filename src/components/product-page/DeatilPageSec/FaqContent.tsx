import React, { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    question: "What is the warranty on the product?",
    answer: "Our products come with a 2-year warranty covering manufacturing defects.",
  },
  {
    question: "How do I track my order?",
    answer: "You can track your order using the tracking number sent via email.",
  },
  {
    question: "Can I change the delivery address after placing the order?",
    answer: "You can change your delivery address within 24 hours of placing the order by contacting support.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 100 countries worldwide.",
  },
  {
    question: "How can I return or exchange an item?",
    answer: "You can return or exchange items within 30 days of purchase by following our return policy.",
  },
  {
    question: "Are there any discounts available for bulk purchases?",
    answer: "Yes, we offer bulk purchase discounts. Please contact our sales team for more details.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 3-7 business days depending on the destination and shipping method selected.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and Apple Pay for online payments.",
  },
  {
    question: "Can I cancel my order?",
    answer: "Orders can be canceled within 24 hours of purchase. Please contact customer service to request cancellation.",
  },
  {
    question: "What should I do if my product is damaged upon arrival?",
    answer: "If your product is damaged, please contact us immediately with photos, and we'll arrange for a return or replacement.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes, we offer gift wrapping for an additional fee. You can select this option during checkout.",
  },
  {
    question: "Can I change my order after it has been placed?",
    answer: "Once an order is placed, it cannot be changed. However, you can cancel it within 24 hours and place a new order.",
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we use SSL encryption to secure your personal and payment information during transactions.",
  },
  {
    question: "Do you offer a subscription service?",
    answer: "Currently, we do not offer a subscription service, but we do have special offers and discounts for returning customers.",
  },
  {
    question: "What is your privacy policy?",
    answer: "Our privacy policy outlines how we collect, use, and protect your personal information. Please refer to our Privacy Policy page for details.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can contact our customer support team via email, phone, or live chat on our website.",
  },
  {
    question: "Do you offer a price match guarantee?",
    answer: "Yes, we offer a price match guarantee. If you find a lower price elsewhere, we will match it.",
  },
  {
    question: "Can I get a refund if I don't like the product?",
    answer: "Refunds are available if the product is returned within 30 days in its original condition. Please check our return policy for more details.",
  },
  {
    question: "What sizes are available for your products?",
    answer: "We offer sizes ranging from XS to 3XL for most of our clothing items. Please refer to the size guide for accurate measurements.",
  },
  {
    question: "Can I use multiple discount codes at once?",
    answer: "No, only one discount code can be applied per order.",
  },
  {
    question: "Do you offer a loyalty program?",
    answer: "Yes, we have a loyalty program that rewards customers with points for every purchase, which can be redeemed for discounts.",
  },
  {
    question: "How do I track my loyalty points?",
    answer: "You can track your loyalty points by logging into your account and visiting the 'Rewards' section.",
  },

];

const FaqContent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Frequently Asked Questions
      </h3>
      <div className="faq-container">
        {faqsData.map((faq, idx) => (
          <div key={idx} className="faq-item mb-4">
            <div
              className="faq-question cursor-pointer flex justify-between items-center p-4 bg-gray-100 rounded-md"
              onClick={() => handleToggle(idx)}
            >
              <h4 className="text-lg font-medium">{faq.question}</h4>
              <span className="text-xl">{activeIndex === idx ? "−" : "+"}</span>
            </div>
            {activeIndex === idx && (
              <div className="faq-answer p-4 bg-gray-50 rounded-md mt-2">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqContent;
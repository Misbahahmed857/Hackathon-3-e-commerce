import ProductListSec from "@/components/CardProductItem/ListingProduct";
import Brands from "@/components/homepage/HeroBrandSec/page";
import DressStyle from "@/components/homepage/StyleDress/page";
import Header from "@/components/homepage/Hero/page";
import Reviews from "@/components/homepage/Reviews/page";
import { Product } from "@/app/APIArray/product.types";
import { Review } from "@/app/APIArray/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    srcUrl: "/images/pic1.png",
    gallery: ["/images/pic1.png"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    srcUrl: "/images/pic2.png",
    gallery: ["/images/pic2.png"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Chechered Shirt",
    srcUrl: "/images/pic3.png",
    gallery: ["/images/pic3.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    srcUrl: "/images/pic4.png",
    gallery: ["/images/pic4.png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 10,
    },
    rating: 4.5,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Vertical Striped Shirt",
    srcUrl: "/images/pic5.png",
    gallery: ["/images/pic5.png"],
    price: 232,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    srcUrl: "/images/pic6.png",
    gallery: ["/images/pic6.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    srcUrl: "/images/pic7.png",
    gallery: ["/images/pic7.png"],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    srcUrl: "/images/pic8.png",
    gallery: ["/images/pic8.png"],
    price: 210,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Polo with Contrast Trims",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png"],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Gradient Graphic T-shirt",
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Polo with Tipping Details",
    srcUrl: "/images/pic14.png",
    gallery: ["/images/pic14.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Black Striped T-shirt",
    srcUrl: "/images/pic15.png",
    gallery: ["/images/pic15.png"],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },

];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Sarah M.",
    content:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
    date: "August 15, 2023",
  },
  {
    id: 2,
    user: "Alex K.",
    content:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
    date: "August 14, 2023",
  },
  {
    id: 3,
    user: "James L.",
    content:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    date: "August 16, 2023",
  },
  {
    id: 4,
    user: "Emily R.",
    content:
      "I've been recommending Shop.co to all my friends! The clothes are stylish, comfortable, and reasonably priced. The customer service is exceptional too.",
    rating: 5,
    date: "August 17, 2023",
  },
  {
    id: 5,
    user: "Michael B.",
    content:
      "What sets Shop.co apart is their attention to detail. Every piece feels premium and is perfect for someone who values quality over quantity.",
    rating: 4,
    date: "August 18, 2023",
  },
  {
    id: 6,
    user: "Sophia T.",
    content:
      "I love how Shop.co keeps their designs fresh and trendy. It’s become my go-to place for upgrading my wardrobe.",
    rating: 5,
    date: "August 19, 2023",
  },
  {
    id: 7,
    user: "Daniel H.",
    content:
      "From everyday wear to special occasions, Shop.co has it all. Their clothes strike a perfect balance between comfort and style.",
    rating: 4.5,
    date: "August 20, 2023",
  },
  {
    id: 8,
    user: "Olivia W.",
    content:
      "Shopping at Shop.co has been a delightful experience. Their website is user-friendly, and the product descriptions are spot on.",
    rating: 5,
    date: "August 21, 2023",
  },
  {
    id: 9,
    user: "Ethan C.",
    content:
      "I love the variety of choices available. Whether it's casual wear or formal attire, I always find something perfect at Shop.co.",
    rating: 4,
    date: "August 22, 2023",
  },
  {
    id: 10,
    user: "Lily P.",
    content: `"I've been a loyal customer of Shop.co for months now, and I’m constantly impressed with their new arrivals. They’re always ahead of the curve in terms of style.”`,
    rating: 5,
    date: "August 23, 2023",
  },
  {
    id: 11,
    user: "Charlotte S.",
    content: `"Shop.co’s clothing is perfect for any occasion. Whether it's a night out or a casual day, they have something that fits my style.”`,
    rating: 4.5,
    date: "August 24, 2023",
  },
  {
    id: 12,
    user: "Oliver P.",
    content: `"Every time I shop at Shop.co, I discover something new and exciting. Their collections never disappoint.”`,
    rating: 5,
    date: "August 25, 2023",
  },
  {
    id: 13,
    user: "Isla J.",
    content: `"The quality of the fabrics used in their clothes is top-notch. It's rare to find such premium-quality items at these prices.”`,
    rating: 5,
    date: "August 26, 2023",
  },
  {
    id: 14,
    user: "Jack M.",
    content: `"Shop.co has really helped me elevate my wardrobe. I’m always excited to see their new arrivals.”`,
    rating: 4.5,
    date: "August 27, 2023",
  },
  {
    id: 15,
    user: "Amelia F.",
    content: `"Their customer service is exceptional, always helpful and quick to respond. I’ve never been disappointed with a purchase.”`,
    rating: 5,
    date: "August 28, 2023",
  },
  {
    id: 16,
    user: "Benjamin L.",
    content: `"The perfect balance of style and comfort. I’ve bought several pieces from Shop.co and loved every one of them.”`,
    rating: 5,
    date: "August 29, 2023",
  },
  {
    id: 17,
    user: "Mia H.",
    content: `"I’m always in awe of the variety of styles available. There’s always something to fit my taste and occasion.”`,
    rating: 4,
    date: "August 30, 2023",
  },
  {
    id: 18,
    user: "Lucas T.",
    content: `"What I love most about Shop.co is how easy it is to shop. The website is intuitive, and the product images are clear and accurate.”`,
    rating: 5,
    date: "August 31, 2023",
  },
  {
    id: 19,
    user: "Grace W.",
    content: `"I adore how Shop.co keeps things fresh with their designs. They offer both trendy pieces and timeless classics.”`,
    rating: 4.5,
    date: "September 1, 2023",
  },
  {
    id: 20,
    user: "William C.",
    content: `"I bought a few items for my wife, and she absolutely loves them. The quality and design are outstanding.”`,
    rating: 5,
    date: "September 2, 2023",
  },
  {
    id: 21,
    user: "Ella D.",
    content: `"Every item I’ve purchased from Shop.co fits perfectly and feels so comfortable. I’m impressed every time I shop.”`,
    rating: 5,
    date: "September 3, 2023",
  },
  {
    id: 22,
    user: "Henry G.",
    content: `"Their clothing line is diverse, and I love how I can always find something for both work and play.”`,
    rating: 4.5,
    date: "September 4, 2023",
  },
  {
    id: 23,
    user: "Ava K.",
    content: `"The fabric quality and designs at Shop.co never disappoint. I’ve made several purchases, and I’ve never been let down.”`,
    rating: 5,
    date: "September 5, 2023",
  },
  {
    id: 24,
    user: "Liam S.",
    content: `"Fantastic online shopping experience! The clothes are always stylish, and the delivery is prompt."`,
    rating: 4,
    date: "September 6, 2023",
  },
  {
    id: 25,
    user: "Sophia V.",
    content: `"I’ve never received so many compliments on my outfits. Shop.co truly delivers on style and quality.”`,
    rating: 5,
    date: "September 7, 2023",
  },
  {
    id: 26,
    user: "James R.",
    content: `"I always find something special at Shop.co. Their unique pieces make my wardrobe stand out.”`,
    rating: 5,
    date: "September 8, 2023",
  },
  {
    id: 27,
    user: "Aiden B.",
    content: `"From trendy streetwear to classic formal attire, Shop.co has it all. My wardrobe has never looked better.”`,
    rating: 4.5,
    date: "September 9, 2023",
  },
  {
    id: 28,
    user: "Maya N.",
    content: `"Every purchase I’ve made from Shop.co has exceeded my expectations. The quality is consistent, and the styles are always fresh.”`,
    rating: 5,
    date: "September 10, 2023",
  },
  {
    id: 29,
    user: "Chloe B.",
    content: `"I love that Shop.co provides such a wide range of options. I can always find something for every occasion."`,
    rating: 4,
    date: "September 11, 2023",
  },
  {
    id: 30,
    user: "Logan M.",
    content: `"I’ve been shopping at Shop.co for over a year, and the experience has been nothing short of amazing. Their clothes never disappoint.”`,
    rating: 5,
    date: "September 12, 2023",
  },
];


export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="top selling"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}

import { createClient } from "@sanity/client";

// Initialize Sanity Client
const client = createClient({
  projectId: "vskel796",
  dataset: "production",
  useCdn: true,
    apiVersion: "2025-01-13",
     token: 'sksyeP7L3q5YXl62beD1C5ucvQdAPQQeumcHNdDO5BsJZ2Frkc7yuKwz3JxJbbgZQrxP99VY2W7A41azC7KS9x93zmb3t40DlsBUQEg1Gv7WbcNnQQ3witzr3WcwbtjKCEMDqEvV65uJ9wVFFTjfg8isP7KR667aoXmYw3GJhBveNzrM7zOg',
});


const populateSlugs = async () => {
    try {
      const products = await client.fetch(`*[_type == "product" && !defined(slug.current)]`);
      console.log("Products without slugs:", products);
  
      if (products.length === 0) {
        console.log("No products found without slugs.");
        return;
      }
  
      const transaction = client.transaction();
  
      products.forEach((product) => {
        const slug = product.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
  
        console.log(`Generating slug for product "${product.name}": ${slug}`);
  
        transaction.patch(product._id, {
          set: {
            slug: {
              _type: "slug",
              current: slug,
            },
          },
        });
      });
  
      await transaction.commit();
      console.log("Slugs generated successfully.");
    } catch (error) {
      console.error("Error populating slugs:", error);
    }
  };
  
  populateSlugs();

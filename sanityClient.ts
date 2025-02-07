import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'vskel796', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset (e.g., 'production')
  apiVersion: '2023-01-01',    // Use the latest date-based API version
  useCdn: true,                // Set to `true` to enable CDN for faster performance
});

export default client;
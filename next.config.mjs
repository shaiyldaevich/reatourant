/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      's3-alpha-sig.figma.com',
      'www.foodandwine.com',
      'encrypted-tbn0.gstatic.com',
      'anerdcooks.com',
      'www.hipmamasplace.com',
      'mojo.generalmills.com',
      'dfwblobstorage.blob.core.windows.net',
      'thenewbaguette.com',
      'recipe30.com',
      'www.allrecipes.com',
      'www.budgetbytes.com'  // Добавлен домен budgetbytes.com
    ],
  },
};

export default nextConfig;

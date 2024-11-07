/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/:path*{.mp4}", // Matches all .mp4 files in the public directory
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable", // Cache for 1 year
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  
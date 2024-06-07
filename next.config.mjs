/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "via.placeholder.com"],
  },
  env: {
    API_URL: "http://localhost:8000/api",
    BASE_URL: "http://localhost:3000",
    GOOGLE_CLIENT_ID: "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com",
  },
};

export default nextConfig;

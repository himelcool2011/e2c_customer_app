import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol : 'https',
        hostname: 'www.portotheme.com',
        pathname: '/wordpress/porto/**'
      }
    ]
  }
};

export default nextConfig;

const nextConfig = {
  /* config options here */ 
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backunp.auladm.com",
      },
      {
        protocol: "https",
        hostname: "backunpcol.auladm.com",
      },
      {
        protocol: "https",
        hostname: "backunpcol.auladm.comflyer_brochure"
      },
      {
        protocol: "https",
        hostname: "backunpcol.auladm.comhttps"
      },
      {
        protocol: "https",
        hostname: "col-classroom-verycerts.sfo3.digitaloceanspaces.com"
      },
      {
        protocol: "https",
        hostname: "verycerts.sfo3.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: "akamai",
        path: "",
    },
    assetPrefix: "/LesDelicesDeMarieLou/",
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};

module.exports = nextConfig;

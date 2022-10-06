/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: "akamai",
        path: "",
    },
    assetPrefix: "./",
    basePath: '/LesDelicesDeMarieLou',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};

module.exports = nextConfig;

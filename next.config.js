/** @type {import('next').NextConfig} */

const path = require('path');

const repo = 'LesDelicesDeMarieLou'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: "akamai",
        path: "",
    },
    assetPrefix: assetPrefix,
    basePath: basePath,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const path = require("path");

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = undefined;

if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

    assetPrefix = `/${repo}`;
    basePath = `/${repo}`;
}

const nextConfig = {
    images: {
        loader: "akamai",
        path: "",
    },
    assetPrefix: assetPrefix,
    basePath: basePath,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

module.exports = nextConfig;

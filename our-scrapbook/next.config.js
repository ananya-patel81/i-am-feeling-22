/** @type {import('next').NextConfig} */

// If you're deploying to https://<username>.github.io/<repo-name>/ (a project page),
// set the repo name below. If you're deploying to a custom domain or a
// <username>.github.io "user/org" page (repo literally named that), leave it as "".
const repoName = "our-scrapbook"; // <-- change this to your GitHub repo's name

const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // produces a static site in /out
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true, // GitHub Pages has no image-optimization server
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

module.exports = nextConfig;

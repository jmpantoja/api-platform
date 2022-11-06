const {i18n} = require('./next-i18next.config');
const withLess = require("next-with-less");
const path = require("path");
const variablesPath = path.resolve('src/styles/variables.less')

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  lessLoaderOptions: {
    additionalData: (content) => `${content}\n\n@import '${variablesPath}';`
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  }
})

module.exports = nextConfig

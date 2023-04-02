const {i18n} = require("./next-i18next.config");
const withLess = require("next-with-less");
const path = require("path");

const seed = require('./src/styles/seed.js')
const globalPath = path.resolve('src/styles/global.less')

const {theme} = require('antd')
const {defaultAlgorithm, defaultSeed} = theme;
const mapToken = defaultAlgorithm({...defaultSeed, ...seed});


module.exports = withLess({
  basePath: '/admin',
  i18n,
  experimental: {
    newNextLinkBehavior: true,
  },
  lessLoaderOptions: {
    additionalData: (content) => `${content}\n\n@import '${globalPath}';`,
    lessOptions: {
      modifyVars: mapToken
    }
  },
  transpilePackages: [
    '@refinedev/antd',
    "@refinedev/inferencer",
    'antd',
    '@ant-design/pro-components',
    '@ant-design/pro-layout',
    '@ant-design/pro-utils',
    '@ant-design/pro-provider',
    'rc-pagination',
    'rc-picker'
  ]
});

const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@comp': path.resolve(__dirname, `${paths.appSrc}/comp/`),
    '@img': path.resolve(__dirname, `${paths.appSrc}/img/`),
  })(config, env);
  return config;
}

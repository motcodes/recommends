const React = require('react');
const { Layout } = require('./src/components/layout');
require('./src/styles/global.css');
require('normalize.css');

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

/* eslint-env jest */

// Mock for MaterialCommunityIcons
const React = require('react');

const MaterialCommunityIcons = props => {
  const { Text } = require('react-native');
  return React.createElement(
    Text,
    {
      testID: props.testID || `icon-${props.name}`,
      ...props,
    },
    props.name,
  );
};

MaterialCommunityIcons.displayName = 'MaterialCommunityIcons';

module.exports = MaterialCommunityIcons;
module.exports.default = MaterialCommunityIcons;

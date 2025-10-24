/* eslint-env jest */

// Mock for react-native-vector-icons
const React = require('react');

const createIconMock = () => {
  const IconComponent = props => {
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

  IconComponent.displayName = 'Icon';
  return IconComponent;
};

const IconMock = createIconMock();

module.exports = {
  __esModule: true,
  default: IconMock,
};

// Export all icon sets with the same mock
const iconSets = [
  'MaterialCommunityIcons',
  'MaterialIcons',
  'FontAwesome',
  'FontAwesome5',
  'Ionicons',
  'Feather',
  'AntDesign',
  'Entypo',
  'Foundation',
  'EvilIcons',
  'Octicons',
  'Zocial',
  'SimpleLineIcons',
];

iconSets.forEach(iconSet => {
  module.exports[iconSet] = IconMock;
});

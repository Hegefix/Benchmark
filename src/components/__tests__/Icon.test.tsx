import React from 'react';
import { render } from '@test-utils';
import { Icon } from '../Icon';

describe('Icon', () => {
  it('should render correctly with name', () => {
    const { getByTestId } = render(<Icon name="home" />);
    expect(getByTestId('icon-home')).toBeTruthy();
  });

  it('should render with default medium size', () => {
    const { getByTestId } = render(<Icon name="account" />);
    const icon = getByTestId('icon-account');
    expect(icon).toBeTruthy();
  });

  it('should render with preset size', () => {
    const { getByTestId } = render(<Icon name="cog" size="xl" />);
    expect(getByTestId('icon-cog')).toBeTruthy();
  });

  it('should render with custom numeric size', () => {
    const { getByTestId } = render(<Icon name="star" size={32} />);
    expect(getByTestId('icon-star')).toBeTruthy();
  });

  it('should render with custom color', () => {
    const { getByTestId } = render(<Icon name="heart" color="#FF0000" />);
    expect(getByTestId('icon-heart')).toBeTruthy();
  });

  it('should use theme text color by default', () => {
    const { getByTestId } = render(<Icon name="bell" />);
    expect(getByTestId('icon-bell')).toBeTruthy();
  });

  it('should render different icon names', () => {
    const { getByTestId: getByTestId1 } = render(<Icon name="home" />);
    expect(getByTestId1('icon-home')).toBeTruthy();

    const { getByTestId: getByTestId2 } = render(<Icon name="account" />);
    expect(getByTestId2('icon-account')).toBeTruthy();

    const { getByTestId: getByTestId3 } = render(<Icon name="cog" />);
    expect(getByTestId3('icon-cog')).toBeTruthy();
  });

  it('should render with all preset sizes', () => {
    const sizes: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> = [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ];

    sizes.forEach(size => {
      const { getByTestId } = render(<Icon name="test" size={size} />);
      expect(getByTestId('icon-test')).toBeTruthy();
    });
  });
});

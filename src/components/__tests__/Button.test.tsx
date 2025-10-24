import React from 'react';
import { render, fireEvent } from '@test-utils';
import { Button } from '../Button';

describe('Button', () => {
  it('should render correctly with title', () => {
    const { getByText } = render(
      <Button title="Test Button" onPress={jest.fn()} />,
    );

    expect(getByText('Test Button')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should render primary variant by default', () => {
    const { getByText } = render(
      <Button title="Primary Button" onPress={jest.fn()} />,
    );

    const button = getByText('Primary Button');
    expect(button).toBeTruthy();
  });

  it('should render secondary variant when specified', () => {
    const { getByText } = render(
      <Button
        title="Secondary Button"
        onPress={jest.fn()}
        variant="secondary"
      />,
    );

    const button = getByText('Secondary Button');
    expect(button).toBeTruthy();
  });

  it('should apply custom style when provided', () => {
    const customStyle = { marginTop: 20 };
    const { getByText } = render(
      <Button title="Styled Button" onPress={jest.fn()} style={customStyle} />,
    );

    expect(getByText('Styled Button')).toBeTruthy();
  });

  it('should apply custom text style when provided', () => {
    const customTextStyle = { fontSize: 20 };
    const { getByText } = render(
      <Button
        title="Custom Text"
        onPress={jest.fn()}
        textStyle={customTextStyle}
      />,
    );

    expect(getByText('Custom Text')).toBeTruthy();
  });

  it('should handle multiple presses', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Multi Press" onPress={onPressMock} />,
    );

    const button = getByText('Multi Press');
    fireEvent.press(button);
    fireEvent.press(button);
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(3);
  });
});

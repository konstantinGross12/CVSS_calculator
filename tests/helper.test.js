import { it, expect } from 'vitest';
import { calculate_Overall_CVSS_vector } from './helper';
import { is_mandatory_input_given } from './helper';

it('Input has 8 values', () => {
  // Arrange
  const input = [1, 2, 3, 4, 5, 6, 7, 8];
  const expected = true;
  // Act
  const result = is_mandatory_input_given(input);
  // Assert
  expect(result).toEqual(expected);
});

it('Input has less than 8 values', () => {
  // Arrange
  const input = [1, 2, 3, 4, 5, 6, 7];
  const expected = false;
  // Act
  const result = is_mandatory_input_given(input);
  // Assert
  expect(result).toEqual(expected);
});

it('Input has more than 8 values', () => {
  // Arrange
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const expected = true;
  // Act
  const result = is_mandatory_input_given(input);
  // Assert
  expect(result).toEqual(expected);
});

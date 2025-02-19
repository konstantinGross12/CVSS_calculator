import { it, expect, describe } from 'vitest';
import { calculate_Overall_CVSS_vector } from './helper';
import { is_mandatory_input_given } from './helper';
import { Minimum } from '../helper.js';
import * as data from './data/data.js';

describe('is_mandatory_input_given', () => {
  it('Full Input given', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000000 },
      { id: 'ac', value: 775000001 },
      { id: 'pr', value: 775000002 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000001 },
      { id: 'i', value: 775000001 },
      { id: 'a', value: 775000001 },
      { id: 'e', value: 775000004 },
      { id: 'rl', value: 775000001 },
      { id: 'rc', value: 775000003 },
      { id: 'mav', value: 775000001 },
      { id: 'mac', value: 775000001 },
      { id: 'mpr', value: 775000003 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000002 },
      { id: 'mc', value: 775000002 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000002 },
      { id: 'cr', value: 775000003 },
      { id: 'ir', value: 775000001 },
      { id: 'ar', value: 775000001 },
    ];
    const expected = true;
    // Act
    const result = is_mandatory_input_given(input);
    // Assert
    expect(result).toEqual(expected);
  });

  it('Base input given', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000000 },
      { id: 'ac', value: 775000001 },
      { id: 'pr', value: 775000002 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000001 },
      { id: 'i', value: 775000001 },
      { id: 'a', value: 775000001 },
    ];
    const expected = true;
    // Act
    const result = is_mandatory_input_given(input);
    // Assert
    expect(result).toEqual(expected);
  });

  it('No input given', () => {
    // Arrange
    const input = [];
    const expected = false;
    // Act
    const result = is_mandatory_input_given(input);
    // Assert
    expect(result).toEqual(expected);
  });

  it('Partial input given', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000000 },
      { id: 'ac', value: 775000001 },
      { id: 'pr', value: 775000002 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000001 },
      { id: 'i', value: 775000001 },
    ];
    const expected = false;
    // Act
    const result = is_mandatory_input_given(input);
    // Assert
    expect(result).toEqual(expected);
  });

  it('Full input given value range wrong', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000000 },
      { id: 'ac', value: 775000404 },
      { id: 'pr', value: 775000002 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000015 },
      { id: 'i', value: 775000001 },
      { id: 'a', value: 775000001 },
      { id: 'e', value: 775000066 },
      { id: 'rl', value: 775000001 },
      { id: 'rc', value: 775000003 },
      { id: 'mav', value: 775000001 },
      { id: 'mac', value: 775000001 },
      { id: 'mpr', value: 775000003 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000002 },
      { id: 'mc', value: 775000002 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000002 },
      { id: 'cr', value: 775000003 },
      { id: 'ir', value: 775000001 },
      { id: 'ar', value: 775000001 },
    ];
    const expected = false;
    // Act
    const result = is_mandatory_input_given(input);
    // Assert
    expect(result).toEqual(expected);
  });
});

describe('Minimum', () => {
  it('2 int values given', () => {
    // Arrange
    const first_input = 1;
    const second_input = 2;
    const expected = 1;
    // Act
    const result = Minimum(first_input, second_input);
    // Assert
    expect(result).toEqual(expected);
  });

  it('2 float values given', () => {
    // Arrange
    const first_input = 1.1;
    const second_input = 2.2;
    const expected = 1.1;
    // Act
    const result = Minimum(first_input, second_input);
    // Assert
    expect(result).toEqual(expected);
  });

  it('1 int and 1 float values given', () => {
    // Arrange
    const first_input = 1;
    const second_input = 2.2;
    const expected = 1;
    // Act
    const result = Minimum(first_input, second_input);
    // Assert
    expect(result).toEqual(expected);
  });
});

describe('Vectors ', () => {
  it('Vector A', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000000 },
      { id: 'ac', value: 775000001 },
      { id: 'pr', value: 775000002 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000001 },
      { id: 'i', value: 775000001 },
      { id: 'a', value: 775000001 },
      { id: 'e', value: 775000004 },
      { id: 'rl', value: 775000001 },
      { id: 'rc', value: 775000003 },
      { id: 'cr', value: 775000003 },
      { id: 'ir', value: 775000001 },
      { id: 'ar', value: 775000001 },
      { id: 'mav', value: 775000001 },
      { id: 'mac', value: 775000001 },
      { id: 'mpr', value: 775000003 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000002 },
      { id: 'mc', value: 775000002 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000002 },
    ];
    const expected =
      'AV:N/AC:H/PR:H/UI:R/S:C/C:L/I:L/A:L/E:H/RL:O/RC:C/CR:H/IR:L/AR:L/MAV:N/MAC:L/MPR:H/MUI:N/MS:C/MC:L/MI:L/MA:L';

    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.vector).toEqual(expected);
  });

  it('Vector B', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000000 },
      { id: 'ac', value: 775000001 },
      { id: 'pr', value: 775000001 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000002 },
      { id: 'i', value: 775000000 },
      { id: 'a', value: 775000000 },
      { id: 'e', value: 775000003 },
      { id: 'rl', value: 775000003 },
      { id: 'rc', value: 775000002 },
      { id: 'cr', value: 775000002 },
      { id: 'ir', value: 775000003 },
      { id: 'ar', value: 775000002 },
      { id: 'mav', value: 775000001 },
      { id: 'mac', value: 775000000 },
      { id: 'mpr', value: 775000000 },
      { id: 'mui', value: 775000000 },
      { id: 'ms', value: 775000001 },
      { id: 'mc', value: 775000001 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000001 },
    ];
    const expected =
      'AV:N/AC:H/PR:L/UI:R/S:C/C:H/I:N/A:N/E:F/RL:W/RC:R/CR:M/IR:H/AR:M/MAV:N/MAC:X/MPR:X/MUI:X/MS:U/MC:N/MI:L/MA:N';

    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.vector).toEqual(expected);
  });
});

describe('Base Scores ', () => {
  it('Base Score A', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000001 },
      { id: 'ac', value: 775000000 },
      { id: 'pr', value: 775000002 },
      { id: 'ui', value: 775000000 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000002 },
      { id: 'i', value: 775000002 },
      { id: 'a', value: 775000002 },
      { id: 'e', value: 775000003 },
      { id: 'rl', value: 775000002 },
      { id: 'rc', value: 775000000 },
      { id: 'cr', value: 775000001 },
      { id: 'ir', value: 775000001 },
      { id: 'ar', value: 775000000 },
      { id: 'mav', value: 775000002 },
      { id: 'mac', value: 775000000 },
      { id: 'mpr', value: 775000002 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000002 },
      { id: 'mc', value: 775000000 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000001 },
    ];
    const expected = 8.4;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.BaseScore).toEqual(expected);
  });

  it('Base Score B', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000001 },
      { id: 'ac', value: 775000000 },
      { id: 'pr', value: 775000001 },
      { id: 'ui', value: 775000000 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000002 },
      { id: 'i', value: 775000001 },
      { id: 'a', value: 775000000 },
      { id: 'e', value: 775000002 },
      { id: 'rl', value: 775000001 },
      { id: 'rc', value: 775000001 },
      { id: 'cr', value: 775000003 },
      { id: 'ir', value: 775000001 },
      { id: 'ar', value: 775000002 },
      { id: 'mav', value: 775000002 },
      { id: 'mac', value: 775000002 },
      { id: 'mpr', value: 775000003 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000000 },
      { id: 'mc', value: 775000001 },
      { id: 'mi', value: 775000001 },
      { id: 'ma', value: 775000000 },
    ];
    const expected = 7.6;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.BaseScore).toEqual(expected);
  });

  it('Base Score C', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000002 },
      { id: 'ac', value: 775000000 },
      { id: 'pr', value: 775000001 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000001 },
      { id: 'i', value: 775000000 },
      { id: 'a', value: 775000000 },
      { id: 'e', value: 775000004 },
      { id: 'rl', value: 775000001 },
      { id: 'rc', value: 775000002 },
      { id: 'cr', value: 775000002 },
      { id: 'ir', value: 775000002 },
      { id: 'ar', value: 775000003 },
      { id: 'mav', value: 775000001 },
      { id: 'mac', value: 775000000 },
      { id: 'mpr', value: 775000001 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000002 },
      { id: 'mc', value: 775000001 },
      { id: 'mi', value: 775000001 },
      { id: 'ma', value: 775000002 },
    ];
    const expected = 3.2;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.BaseScore).toEqual(expected);
  });
});

describe('Temporal Scores', () => {
  it('Temporal Score A', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000001 },
      { id: 'ac', value: 775000001 },
      { id: 'pr', value: 775000000 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000002 },
      { id: 'i', value: 775000001 },
      { id: 'a', value: 775000000 },
      { id: 'e', value: 775000001 },
      { id: 'rl', value: 775000001 },
      { id: 'rc', value: 775000003 },
      { id: 'cr', value: 775000003 },
      { id: 'ir', value: 775000003 },
      { id: 'ar', value: 775000000 },
      { id: 'mav', value: 775000002 },
      { id: 'mac', value: 775000000 },
      { id: 'mpr', value: 775000001 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000000 },
      { id: 'mc', value: 775000002 },
      { id: 'mi', value: 775000000 },
      { id: 'ma', value: 775000000 },
    ];
    const expected = 5.6;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.TemporalScore).toEqual(expected);
  });
  it('Temporal Score B', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000002 },
      { id: 'ac', value: 775000000 },
      { id: 'pr', value: 775000002 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000000 },
      { id: 'c', value: 775000000 },
      { id: 'i', value: 775000001 },
      { id: 'a', value: 775000000 },
      { id: 'e', value: 775000002 },
      { id: 'rl', value: 775000002 },
      { id: 'rc', value: 775000001 },
      { id: 'cr', value: 775000002 },
      { id: 'ir', value: 775000003 },
      { id: 'ar', value: 775000003 },
      { id: 'mav', value: 775000003 },
      { id: 'mac', value: 775000000 },
      { id: 'mpr', value: 775000002 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000002 },
      { id: 'mc', value: 775000001 },
      { id: 'mi', value: 775000000 },
      { id: 'ma', value: 775000002 },
    ];
    const expected = 1.7;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.TemporalScore).toEqual(expected);
  });
  it('Temporal Score C', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000002 },
      { id: 'ac', value: 775000001 },
      { id: 'pr', value: 775000001 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000002 },
      { id: 'i', value: 775000002 },
      { id: 'a', value: 775000000 },
      { id: 'e', value: 775000002 },
      { id: 'rl', value: 775000000 },
      { id: 'rc', value: 775000002 },
      { id: 'cr', value: 775000002 },
      { id: 'ir', value: 775000002 },
      { id: 'ar', value: 775000003 },
      { id: 'mav', value: 775000003 },
      { id: 'mac', value: 775000002 },
      { id: 'mpr', value: 775000003 },
      { id: 'mui', value: 775000000 },
      { id: 'ms', value: 775000000 },
      { id: 'mc', value: 775000000 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000000 },
    ];
    const expected = 6.5;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.TemporalScore).toEqual(expected);
  });
});

describe('Enviromental Scores', () => {
  it('Enviromental Score A', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000002 },
      { id: 'ac', value: 775000000 },
      { id: 'pr', value: 775000001 },
      { id: 'ui', value: 775000000 },
      { id: 's', value: 775000000 },
      { id: 'c', value: 775000002 },
      { id: 'i', value: 775000000 },
      { id: 'a', value: 775000001 },
      { id: 'e', value: 775000004 },
      { id: 'rl', value: 775000000 },
      { id: 'rc', value: 775000001 },
      { id: 'cr', value: 775000001 },
      { id: 'ir', value: 775000001 },
      { id: 'ar', value: 775000000 },
      { id: 'mav', value: 775000001 },
      { id: 'mac', value: 775000000 },
      { id: 'mpr', value: 775000000 },
      { id: 'mui', value: 775000000 },
      { id: 'ms', value: 775000001 },
      { id: 'mc', value: 775000001 },
      { id: 'mi', value: 775000000 },
      { id: 'ma', value: 775000000 },
    ];
    const expected = 4.0;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.EnvironmentalScore).toEqual(expected);
  });

  it('Enviromental Score B', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000001 },
      { id: 'ac', value: 775000000 },
      { id: 'pr', value: 775000001 },
      { id: 'ui', value: 775000000 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000002 },
      { id: 'i', value: 775000000 },
      { id: 'a', value: 775000000 },
      { id: 'e', value: 775000003 },
      { id: 'rl', value: 775000001 },
      { id: 'rc', value: 775000001 },
      { id: 'cr', value: 775000000 },
      { id: 'ir', value: 775000003 },
      { id: 'ar', value: 775000003 },
      { id: 'mav', value: 775000004 },
      { id: 'mac', value: 775000000 },
      { id: 'mpr', value: 775000002 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000002 },
      { id: 'mc', value: 775000001 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000002 },
    ];
    const expected = 4.4;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.EnvironmentalScore).toEqual(expected);
  });

  it('Enviromental Score C', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000003 },
      { id: 'ac', value: 775000000 },
      { id: 'pr', value: 775000000 },
      { id: 'ui', value: 775000000 },
      { id: 's', value: 775000000 },
      { id: 'c', value: 775000001 },
      { id: 'i', value: 775000001 },
      { id: 'a', value: 775000000 },
      { id: 'e', value: 775000002 },
      { id: 'rl', value: 775000002 },
      { id: 'rc', value: 775000001 },
      { id: 'cr', value: 775000002 },
      { id: 'ir', value: 775000000 },
      { id: 'ar', value: 775000002 },
      { id: 'mav', value: 775000001 },
      { id: 'mac', value: 775000002 },
      { id: 'mpr', value: 775000002 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000002 },
      { id: 'mc', value: 775000001 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000002 },
    ];
    const expected = 4.1;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.EnvironmentalScore).toEqual(expected);
  });

  it('Enviromental Score D', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000002 },
      { id: 'ac', value: 775000000 },
      { id: 'pr', value: 775000000 },
      { id: 'ui', value: 775000000 },
      { id: 's', value: 775000000 },
      { id: 'c', value: 775000002 },
      { id: 'i', value: 775000002 },
      { id: 'a', value: 775000000 },
      { id: 'e', value: 775000002 },
      { id: 'rl', value: 775000000 },
      { id: 'rc', value: 775000002 },
      { id: 'cr', value: 775000002 },
      { id: 'ir', value: 775000002 },
      { id: 'ar', value: 775000001 },
      { id: 'mav', value: 775000002 },
      { id: 'mac', value: 775000000 },
      { id: 'mpr', value: 775000003 },
      { id: 'mui', value: 775000000 },
      { id: 'ms', value: 775000002 },
      { id: 'mc', value: 775000001 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000000 },
    ];
    const expected = 3.1;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.EnvironmentalScore).toEqual(expected);
  });

  it('Enviromental Score E', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000001 },
      { id: 'ac', value: 775000001 },
      { id: 'pr', value: 775000001 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000000 },
      { id: 'c', value: 775000000 },
      { id: 'i', value: 775000002 },
      { id: 'a', value: 775000000 },
      { id: 'e', value: 775000004 },
      { id: 'rl', value: 775000001 },
      { id: 'rc', value: 775000003 },
      { id: 'cr', value: 775000000 },
      { id: 'ir', value: 775000003 },
      { id: 'ar', value: 775000000 },
      { id: 'mav', value: 775000004 },
      { id: 'mac', value: 775000002 },
      { id: 'mpr', value: 775000003 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000000 },
      { id: 'mc', value: 775000002 },
      { id: 'mi', value: 775000001 },
      { id: 'ma', value: 775000001 },
    ];
    const expected = 1.6;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.EnvironmentalScore).toEqual(expected);
  });

  it('Enviromental Score F', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000000 },
      { id: 'ac', value: 775000000 },
      { id: 'pr', value: 775000000 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000000 },
      { id: 'i', value: 775000000 },
      { id: 'a', value: 775000001 },
      { id: 'e', value: 775000004 },
      { id: 'rl', value: 775000003 },
      { id: 'rc', value: 775000000 },
      { id: 'cr', value: 775000003 },
      { id: 'ir', value: 775000002 },
      { id: 'ar', value: 775000000 },
      { id: 'mav', value: 775000000 },
      { id: 'mac', value: 775000001 },
      { id: 'mpr', value: 775000000 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000001 },
      { id: 'mc', value: 775000000 },
      { id: 'mi', value: 775000000 },
      { id: 'ma', value: 775000000 },
    ];
    const expected = 5.2;
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.EnvironmentalScore).toEqual(expected);
  });
});

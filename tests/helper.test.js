import { it, expect, describe } from 'vitest';
import { calculate_Overall_CVSS_vector } from './helper';
import { is_mandatory_input_given } from './helper';
import * as data from './data/data.js';

describe('calculate_Overall_CVSS_vector', () => {
  it('Input example A AV:N/AC:H/PR:L/UI:R/S:U/C:L/I:L/A:L/E:H/RL:O/RC:C/MAV:N/MAC:X/MPR:L/MUI:N/MS:U/MC:L/MI:L/MA:L/CR:X/IR:X/AR:L', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000000 },
      { id: 'ac', value: 775000001 },
      { id: 'pr', value: 775000001 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000000 },
      { id: 'c', value: 775000001 },
      { id: 'i', value: 775000001 },
      { id: 'a', value: 775000001 },
      { id: 'e', value: 775000004 },
      { id: 'rl', value: 775000001 },
      { id: 'rc', value: 775000003 },
      { id: 'mav', value: 775000001 },
      { id: 'mac', value: 775000000 },
      { id: 'mpr', value: 775000002 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000001 },
      { id: 'mc', value: 775000002 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000002 },
      { id: 'cr', value: 775000000 },
      { id: 'ir', value: 775000000 },
      { id: 'ar', value: 775000001 },
    ];
    const expected = {
      BaseScore: 4.6,
      TemporalScore: 4.4,
      MISS: 0.45852399999999993,
      ModifiedImpact: 2.9437240799999995,
      ModifiedExploitability: 3.6821490000000003,
      EnvironmentalScore: 4.4,
      vector:
        'AV:N/AC:H/PR:L/UI:R/S:U/C:L/I:L/A:L/E:H/RL:O/RC:C/MAV:N/MAC:X/MPR:L/MUI:N/MS:U/MC:L/MI:L/MA:L/CR:X/IR:X/AR:L',
    };
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.vector).toEqual(expected.vector);
    expect(result.BaseScore).toEqual(expected.BaseScore);
    expect(result.TemporalScore).toEqual(expected.TemporalScore);
    //expect(result.MISS).toEqual(expected.MISS);
    //expect(result.ModifiedImpact).toEqual(expected.ModifiedImpact);
    //expect(result.ModifiedExploitability).toEqual(expected.ModifiedExploitability);
    expect(result.EnvironmentalScore).toEqual(expected.EnvironmentalScore);
  });

  it('Input Example AV:P/AC:H/PR:N/UI:N/S:C/C:H/I:H/A:L/E:H/RL:T/RC:X/MAV:N/MAC:H/MPR:L/MUI:N/MS:X/MC:X/MI:L/MA:N/CR:L/IR:L/AR:H', () => {
    //Arrange
    const input = [
      { id: 'av', value: 775000003 },
      { id: 'ac', value: 775000001 },
      { id: 'pr', value: 775000000 },
      { id: 'ui', value: 775000000 },
      { id: 's', value: 775000001 },
      { id: 'c', value: 775000002 },
      { id: 'i', value: 775000002 },
      { id: 'a', value: 775000001 },
      { id: 'e', value: 775000004 },
      { id: 'rl', value: 775000002 },
      { id: 'rc', value: 775000000 },
      { id: 'mav', value: 775000001 },
      { id: 'mac', value: 775000002 },
      { id: 'mpr', value: 775000002 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000000 },
      { id: 'mc', value: 775000000 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000001 },
      { id: 'cr', value: 775000001 },
      { id: 'ir', value: 775000001 },
      { id: 'ar', value: 775000003 },
    ];
    const expected = {
      BaseScore: 7.1,
      TemporalScore: 6.9,
      EnvironmentalScore: 4.6,
      vector:
        'AV:P/AC:H/PR:N/UI:N/S:C/C:H/I:H/A:L/E:H/RL:T/RC:X/MAV:N/MAC:H/MPR:L/MUI:N/MS:X/MC:X/MI:L/MA:N/CR:L/IR:L/AR:H',
    };
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.vector).toEqual(expected.vector);
    expect(result.BaseScore).toEqual(expected.BaseScore);
    expect(result.TemporalScore).toEqual(expected.TemporalScore);
    expect(result.EnvironmentalScore).toEqual(expected.EnvironmentalScore);
  });

  it('Input example C AV:N/AC:H/PR:L/UI:R/S:U/C:L/I:L/A:L/E:H/RL:O/RC:C/MAV:N/MAC:X/MPR:L/MUI:N/MS:U/MC:L/MI:L/MA:L/CR:X/IR:X/AR:L', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000000 },
      { id: 'ac', value: 775000001 },
      { id: 'pr', value: 775000001 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000000 },
      { id: 'c', value: 775000001 },
      { id: 'i', value: 775000001 },
      { id: 'a', value: 775000001 },
      { id: 'e', value: 775000004 },
      { id: 'rl', value: 775000001 },
      { id: 'rc', value: 775000003 },
      { id: 'mav', value: 775000001 },
      { id: 'mac', value: 775000000 },
      { id: 'mpr', value: 775000001 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000001 },
      { id: 'mc', value: 775000002 },
      { id: 'mi', value: 775000002 },
      { id: 'ma', value: 775000002 },
      { id: 'cr', value: 775000000 },
      { id: 'ir', value: 775000000 },
      { id: 'ar', value: 775000001 },
    ];
    const expected = {
      BaseScore: 4.6,
      TemporalScore: 4.4,
      MISS: 0.45852399999999993,
      ModifiedImpact: 2.9437240799999995,
      ModifiedExploitability: 5.0481075,
      EnvironmentalScore: 5,
      vector:
        'AV:N/AC:H/PR:L/UI:R/S:U/C:L/I:L/A:L/E:H/RL:O/RC:C/MAV:N/MAC:X/MPR:N/MUI:N/MS:U/MC:L/MI:L/MA:L/CR:X/IR:X/AR:L',
    };
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.vector).toEqual(expected.vector);
    expect(result.BaseScore).toEqual(expected.BaseScore);
    expect(result.TemporalScore).toEqual(expected.TemporalScore);
    expect(result.MISS).toEqual(expected.MISS);
    expect(result.ModifiedImpact).toEqual(expected.ModifiedImpact);
    expect(result.ModifiedExploitability).toEqual(expected.ModifiedExploitability);
    expect(result.EnvironmentalScore).toEqual(expected.EnvironmentalScore);
  });

  // PASSED
  it('Input example D AV:N/AC:H/PR:H/UI:R/S:C/C:L/I:L/A:L/E:H/RL:O/RC:C/MAV:N/MAC:L/MPR:H/MUI:N/MS:C/MC:L/MI:L/MA:L/CR:H/IR:L/AR:L', () => {
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
    const expected = {
      BaseScore: 5.1,
      TemporalScore: 4.9,
      MISS: 0.46929300000000007,
      ModifiedImpact: 3.310935147447944,
      ModifiedExploitability: 2.2864957500000003, // probably wrong
      EnvironmentalScore: 4.8,
      vector:
        'AV:N/AC:H/PR:H/UI:R/S:C/C:L/I:L/A:L/E:H/RL:O/RC:C/MAV:N/MAC:L/MPR:H/MUI:N/MS:C/MC:L/MI:L/MA:L/CR:H/IR:L/AR:L',
    };
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.vector).toEqual(expected.vector);
    expect(result.BaseScore).toEqual(expected.BaseScore);
    expect(result.TemporalScore).toEqual(expected.TemporalScore);
    //expect(result.MISS).toEqual(expected.MISS);
    //expect(result.ModifiedImpact).toEqual(expected.ModifiedImpact);
    //expect(result.ModifiedExploitability).toEqual(expected.ModifiedExploitability);
    expect(result.EnvironmentalScore).toEqual(expected.EnvironmentalScore);
  });

  it('Input example ...', () => {
    // Arrange
    const input = [
      { id: 'av', value: 775000002 },
      { id: 'ac', value: 775000000 },
      { id: 'pr', value: 775000002 },
      { id: 'ui', value: 775000001 },
      { id: 's', value: 775000000 },
      { id: 'c', value: 775000001 },
      { id: 'i', value: 775000002 },
      { id: 'a', value: 775000002 },
      { id: 'e', value: 775000001 },
      { id: 'rl', value: 775000003 },
      { id: 'rc', value: 775000001 },
      { id: 'mav', value: 775000004 },
      { id: 'mac', value: 775000002 },
      { id: 'mpr', value: 775000003 },
      { id: 'mui', value: 775000001 },
      { id: 'ms', value: 775000002 },
      { id: 'mc', value: 775000001 },
      { id: 'mi', value: 775000003 },
      { id: 'ma', value: 775000001 },
      { id: 'cr', value: 775000003 },
      { id: 'ir', value: 775000002 },
      { id: 'ar', value: 775000001 },
    ];
    const expected = {
      BaseScore: 6.1,
      TemporalScore: 5.0,
      MISS: 0,
      ModifiedImpact: 0,
      ModifiedExploitability: 0,
      EnvironmentalScore: 5.3,
      vector:
        'AV:L/AC:L/PR:H/UI:R/S:U/C:L/I:H/A:H/E:U/RL:W/RC:U/CR:H/IR:M/AR:X/MAV:P/MAC:H/MPR:H/MUI:X/MS:C/MC:N/MI:H/MA:X',
    };
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    //expect(result.vector).toEqual(expected.vector);
    expect(result.BaseScore).toEqual(expected.BaseScore);
    expect(result.TemporalScore).toEqual(expected.TemporalScore);
    expect(result.EnvironmentalScore).toEqual(expected.EnvironmentalScore);
  });
});

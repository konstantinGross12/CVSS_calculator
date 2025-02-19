import { it, expect, describe } from "vitest";
import { calculate_Overall_CVSS_vector } from "./helper";
import { is_mandatory_input_given } from "./helper";
import * as data from "./data/data.js";

describe("calculate_Overall_CVSS_vector", () => {
  it("Input example AV:N/AC:H/PR:L/UI:R/S:U/C:L/I:L/A:L/E:H/RL:O/RC:C/MAV:N/MAC:X/MPR:L/MUI:N/MS:U/MC:L/MI:L/MA:L/CR:X/IR:X/AR:L", () => {
    // Arrange
    const input = [
      { id: "av", value: 775000000 },
      { id: "ac", value: 775000001 },
      { id: "pr", value: 775000001 },
      { id: "ui", value: 775000001 },
      { id: "s", value: 775000000 },
      { id: "c", value: 775000001 },
      { id: "i", value: 775000001 },
      { id: "a", value: 775000001 },
      { id: "e", value: 775000004 },
      { id: "rl", value: 775000001 },
      { id: "rc", value: 775000003 },
      { id: "mav", value: 775000001 },
      { id: "mac", value: 775000000 },
      { id: "mpr", value: 775000002 },
      { id: "mui", value: 775000001 },
      { id: "ms", value: 775000001 },
      { id: "mc", value: 775000002 },
      { id: "mi", value: 775000002 },
      { id: "ma", value: 775000002 },
      { id: "cr", value: 775000000 },
      { id: "ir", value: 775000000 },
      { id: "ar", value: 775000001 },
    ];
    const expected = {
      BaseScore: 4.6,
      TemporalScore: 4.4,
      EnvironmentalScore: 4.4,
      vector:
        "AV:N/AC:H/PR:L/UI:R/S:U/C:L/I:L/A:L/E:H/RL:O/RC:C/MAV:N/MAC:X/MPR:L/MUI:N/MS:U/MC:L/MI:L/MA:L/CR:X/IR:X/AR:L",
    };
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.vector).toEqual(expected.vector);
    expect(result.BaseScore).toEqual(expected.BaseScore);
    expect(result.TemporalScore).toEqual(expected.TemporalScore);
    // expect(result.EnvironmentalScore).toEqual(expected.EnvironmentalScore);
  });
  it("Input Example AV:P/AC:H/PR:N/UI:N/S:C/C:H/I:H/A:L/E:H/RL:T/RC:X/MAV:N/MAC:H/MPR:L/MUI:N/MS:X/MC:X/MI:L/MA:N/CR:L/IR:L/AR:H", () => {
    //Arrange
    const input = [
      { id: "av", value: 775000003 },
      { id: "ac", value: 775000001 },
      { id: "pr", value: 775000000 },
      { id: "ui", value: 775000000 },
      { id: "s", value: 775000001 },
      { id: "c", value: 775000002 },
      { id: "i", value: 775000002 },
      { id: "a", value: 775000001 },
      { id: "e", value: 775000004 },
      { id: "rl", value: 775000002 },
      { id: "rc", value: 775000000 },
      { id: "mav", value: 775000001 },
      { id: "mac", value: 775000002 },
      { id: "mpr", value: 775000002 },
      { id: "mui", value: 775000001 },
      { id: "ms", value: 775000000 },
      { id: "mc", value: 775000000 },
      { id: "mi", value: 775000002 },
      { id: "ma", value: 775000001 },
      { id: "cr", value: 775000001 },
      { id: "ir", value: 775000001 },
      { id: "ar", value: 775000003 },
    ];
    const expected = {
      BaseScore: 7.1,
      TemporalScore: 6.9,
      EnvironmentalScore: 4.6,
      vector:
        "AV:P/AC:H/PR:N/UI:N/S:C/C:H/I:H/A:L/E:H/RL:T/RC:X/MAV:N/MAC:H/MPR:L/MUI:N/MS:X/MC:X/MI:L/MA:N/CR:L/IR:L/AR:H",
    };
    // Act
    const result = calculate_Overall_CVSS_vector(input, data);
    // Assert
    expect(result.vector).toEqual(expected.vector);
    expect(result.BaseScore).toEqual(expected.BaseScore);
    expect(result.TemporalScore).toEqual(expected.TemporalScore);
    expect(result.EnvironmentalScore).toEqual(expected.EnvironmentalScore);
  });
});

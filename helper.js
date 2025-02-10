export const Minimum = function (val_1, val_2) {
  return val_1 < val_2 ? val_1 : val_2;
};

export const Roundup = function (val) {
  return Math.ceil(val);
};

export const calculate_impact_sub_score = function (confidentiality, integrity, availability) {
  return 1 - (1 - confidentiality) * (1 - integrity) * (1 - availability);
};

export const calculate_Overall_CVSS_vector = function (input, data) {
  let result = '';
  for (let index = 0; index < input.length; index++) {
    const element = input[index];

    for (const value of data[index]) {
      if (value.dataverse_value === element) {
        result += `${value.string_value}/`;
      }
    }
  }
  result = result.slice(0, -1);
  return result;
};

export const is_mandatory_input_given = function (input) {
  if (input.length < 8) {
    return false;
  }
  return true;
};

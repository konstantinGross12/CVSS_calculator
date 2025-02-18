export const input_base_full_randomzer = function (input_data) {
  let result = [
    // base part
    { id: 'av', value: null },
    { id: 'ac', value: null },
    { id: 'pr', value: null },
    { id: 'ui', value: null },
    { id: 's', value: null },
    { id: 'c', value: null },
    { id: 'i', value: null },
    { id: 'a', value: null },
    // temporal part
    { id: 'e', value: null },
    { id: 'rl', value: null },
    { id: 'rc', value: null },

    // environmental part
    { id: 'mav', value: null },
    { id: 'mac', value: null },
    { id: 'mpr', value: null },
    { id: 'mui', value: null },
    { id: 'ms', value: null },
    { id: 'mc', value: null },
    { id: 'mi', value: null },
    { id: 'ma', value: null },
    { id: 'cr', value: null },
    { id: 'ir', value: null },
    { id: 'ar', value: null },
  ];

  for (const input_object of input_data) {
    const input_id = input_object.id;
    const result_index = result.findIndex((element) => element.id === input_id);

    const randox_index = Math.floor(Math.random() * input_object.values.length);

    const random_value = input_object.values[randox_index];

    result[result_index].value = random_value;
  }

  return result;
};

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

import * as data from './data/data.js';
import * as helper from './helper.js';

let input = helper.input_base_full_randomzer(data.base_full_input_data);

let is_valid_input = helper.is_mandatory_input_given(input);

console.log(input);

if (!is_valid_input) {
  console.log('Mandatory input is missing');
} else {
  console.log('Mandatory input is present');

  let Overall_CVSS_vector = helper.calculate_Overall_CVSS_vector(input, data);
  console.log(Overall_CVSS_vector.vector);

  console.log(`BaseScore is  ${Overall_CVSS_vector.BaseScore}`);
  console.log(`TemporalScore is  ${Overall_CVSS_vector.TemporalScore}`);
  console.log(`EnvironmentalScore is  ${Overall_CVSS_vector.EnvironmentalScore}`);
}

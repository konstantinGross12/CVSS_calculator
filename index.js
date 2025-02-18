import * as data from './data/data.js';
import * as helper from './helper.js';

//let invalid_input = helper.input_base_full_randomzer(data.base_full_input_data_worst_case);
let input = helper.input_base_full_randomzer(data.base_full_input_data);
let is_valid_input = helper.is_mandatory_input_given(input);

if (!is_valid_input) {
  console.log('Mandatory input is missing');
} else {
  console.log('Mandatory input is present');

  let CVSS_environmental_score;
  let CVSS_modified_score;
  let Overall_CVSS_score;

  let Overall_CVSS_vector = helper.calculate_Overall_CVSS_vector(input, data);
  console.log(Overall_CVSS_vector.vector);
  /*
  console.log(`ISS is  ${Overall_CVSS_vector.ISS}`);
  console.log(`Impact is ${Overall_CVSS_vector.Impact}`);
  console.log(`Exploitability is  ${Overall_CVSS_vector.exploitability}`);
  console.log(`BaseScore is  ${Overall_CVSS_vector.BaseScore}`);
  console.log(`TemporalScore is  ${Overall_CVSS_vector.TemporalScore}`);
  console.log(`MISS is  ${Overall_CVSS_vector.MISS}`);
  */
  console.log(`MISS is  ${Overall_CVSS_vector.MISS}`);
  console.log(`ModifiedImpact is  ${Overall_CVSS_vector.ModifiedImpact}`);
  console.log(`ModifiedExploitability is  ${Overall_CVSS_vector.ModifiedExploitability}`);
  console.log(`EnvironmentalScore is  ${Overall_CVSS_vector.EnvironmentalScore}`);
}

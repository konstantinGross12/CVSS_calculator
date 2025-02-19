import * as data from './data/data.js';
import * as helper from './helper.js';

//let invalid_input = helper.input_base_full_randomzer(data.base_full_input_data_worst_case);
//let input = helper.input_base_full_randomzer(data.base_full_input_data);
let input = [
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
let is_valid_input = helper.is_mandatory_input_given(input);

console.log(input);

if (!is_valid_input) {
  console.log('Mandatory input is missing');
} else {
  console.log('Mandatory input is present');

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

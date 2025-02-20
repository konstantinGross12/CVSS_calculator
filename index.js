import * as data from './data/data.js';
import * as helper from './helper.js';

// let input = helper.input_base_full_randomzer(data.base_full_input_data);

const inputs_from_tests = [
  // Enviromental Score A 0
  [
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
    // From here on is intresting
    { id: 'cr', value: 775000001 }, // CR:L Low value should be 0.5
    { id: 'ir', value: 775000001 }, // IR:L Low value should be 0.5
    { id: 'ar', value: 775000000 }, // AR:N Not Defined value should be 1
    { id: 'mav', value: 775000001 }, // MAV:N Network value should be 0.85
    { id: 'mac', value: 775000000 }, // MAC:X value should be 1
    { id: 'mpr', value: 775000000 }, // MPR:X Not Defined value should be 1
    { id: 'mui', value: 775000000 }, // MUI:X Not Defined value should be 1
    { id: 'ms', value: 775000001 }, // MS:U Unchanged
    { id: 'mc', value: 775000001 }, // MX:N None value should be 0
    { id: 'mi', value: 775000000 }, // MI:X Not Defined value should be 1
    { id: 'ma', value: 775000000 }, // MA:X Not Defined value should be 1
  ],
  // Enviromental Score B 1
  [
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
    { id: 'ms', value: 775000002 }, // MS:C Changed
    { id: 'mc', value: 775000001 },
    { id: 'mi', value: 775000002 },
    { id: 'ma', value: 775000002 },
  ],
  // Enviromental Score C 2
  [
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
    { id: 'ms', value: 775000002 }, // MS:C Changed
    { id: 'mc', value: 775000001 },
    { id: 'mi', value: 775000002 },
    { id: 'ma', value: 775000002 },
  ],

  // Enviromental Score D 3
  [
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
    { id: 'ms', value: 775000002 }, // MS:C Changed
    { id: 'mc', value: 775000001 },
    { id: 'mi', value: 775000002 },
    { id: 'ma', value: 775000000 },
  ],
  // Enviromental Score E 4
  [
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
  ],
  // Enviromental Score F 5
  [
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
  ],
];

const input = inputs_from_tests[0];

let is_valid_input = helper.is_mandatory_input_given(input);

console.log(input);

if (!is_valid_input) {
  console.log('Mandatory input is missing');
} else {
  console.log('Mandatory input is present');

  let Overall_CVSS_vector = helper.calculate_Overall_CVSS_vector(input, data);
  console.log(Overall_CVSS_vector.vector);

  console.log(`ISS is  ${Overall_CVSS_vector.ISS}`);
  console.log(`Impact is ${Overall_CVSS_vector.Impact}`);
  console.log(`Exploitability is  ${Overall_CVSS_vector.exploitability}`);
  console.log(`BaseScore is  ${Overall_CVSS_vector.BaseScore}`);
  console.log(`TemporalScore is  ${Overall_CVSS_vector.TemporalScore}`);
  console.log(`MISS is  ${Overall_CVSS_vector.MISS}`);
  console.log(`ModifiedImpact is  ${Overall_CVSS_vector.ModifiedImpact}`);
  console.log(`ModifiedExploitability is  ${Overall_CVSS_vector.ModifiedExploitability}`);
  console.log(`EnvironmentalScore is  ${Overall_CVSS_vector.EnvironmentalScore}`);
}

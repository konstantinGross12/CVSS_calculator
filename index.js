import * as data from './data/data.js';
import * as helper from './helper.js';

let counter = 0;
const blocker = 10000;
while (counter < blocker) {
  let input = helper.input_base_full_randomzer(data.base_full_input_data);
  //AV:L/AC:H/PR:H/UI:R/S:C/C:H/I:N/A:N/E:H/RL:U/RC:R/CR:L/IR:L/AR:H/MAV:L/MAC:L/MPR:X/MUI:N/MS:C/MC:X/MI:N/MA:N
  /*let input = [
    { id: 'av', value: 775000002 }, // ok
    { id: 'ac', value: 775000001 }, // ok
    { id: 'pr', value: 775000002 }, // ok
    { id: 'ui', value: 775000001 }, // ok
    { id: 's', value: 775000001 }, // ok
    { id: 'c', value: 775000002 }, // ok
    { id: 'i', value: 775000000 }, // ok
    { id: 'a', value: 775000000 }, // ok
    { id: 'e', value: 775000004 }, //  ok
    { id: 'rl', value: 775000004 }, // ok
    { id: 'rc', value: 775000002 }, // ok
    { id: 'cr', value: 775000001 }, // ok
    { id: 'ir', value: 775000001 }, // ok
    { id: 'ar', value: 775000003 }, // ok
    { id: 'mav', value: 775000003 }, // ok
    { id: 'mac', value: 775000001 }, // ok
    { id: 'mpr', value: 775000000 }, // ok
    { id: 'mui', value: 775000001 }, // ok
    { id: 'ms', value: 775000002 }, // ok
    { id: 'mc', value: 775000000 }, // ok
    { id: 'mi', value: 775000001 }, // ok
    { id: 'ma', value: 775000001 }, // ok
  ];*/

  let is_valid_input = helper.is_mandatory_input_given(input);

  if (!is_valid_input) {
    console.log('Mandatory input is missing');
  } else {
    const Overall_CVSS_vector = helper.calculate_Overall_CVSS_vector(input, data);
    const vector = Overall_CVSS_vector.vector;
    const base = Overall_CVSS_vector.BaseScore;
    const temporal = Overall_CVSS_vector.TemporalScore;
    const MISS = Overall_CVSS_vector.MISS;
    const ModifiedImpact = Overall_CVSS_vector.ModifiedImpact;
    const ModifiedExploitability = Overall_CVSS_vector.ModifiedExploitability;
    const environmental = Overall_CVSS_vector.EnvironmentalScore;
    // debug AV:L/AC:H/PR:H/UI:R/S:C/C:H/I:N/A:N/E:H/RL:U/RC:R/CR:L/IR:L/AR:H/MAV:L/MAC:L/MPR:X/MUI:N/MS:C/MC:X/MI:N/MA:N
    (async () => {
      try {
        const res = await fetch(
          `https://cvss-vector-validator-bxdqdebdh0hcb6cz.germanywestcentral-01.azurewebsites.net/v3?vector=CVSS:3.1/${vector}`
        );

        const result = await res.json();

        const modified_isc_base = result.modified_isc_base; //MISS
        const modified_isc = result.modified_isc; //ModifiedImpact
        const modified_esc = result.modified_esc; //ModifiedExploitability
        const environmental_score = result.environmental_score;

        if (environmental != environmental_score) {
          console.log(`---------------------------------------------------------`);
          console.log(`Calculated Vector:                   ${vector}`);
          console.log(`API Vector:                          ${result.vector.slice(9)}`);
          console.log(`Calculated MISS:                     ${MISS}`);
          console.log(`API MISS:                            ${modified_isc_base}`);
          console.log(`Calculated Modified Impact:          ${ModifiedImpact}`);
          console.log(`API Modified Impact:                 ${modified_isc}`);
          console.log(`Calculated Modified Exploitability:  ${ModifiedExploitability}`);
          console.log(`API Modified Exploitability:         ${modified_esc}`);
          console.log(`Calculated Environmental Score:      ${environmental}`);
          console.log(`API Environmental Score:             ${environmental_score}`);
          console.log(`---------------------------------------------------------`);
        } else {
          console.warn('No difference');
        }
      } catch (err) {
        console.log(err.message); //can be console.error
      }
    })();
  }

  counter++;
}

import * as data from './data/data.js';
import * as helper from './helper.js';

let counter = 0;
const blocker = 3;
while (counter < blocker) {
  let input = helper.input_base_full_randomzer(data.base_full_input_data);

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

    (async () => {
      try {
        const res = await fetch(
          `https://cvss-vector-validator-bxdqdebdh0hcb6cz.germanywestcentral-01.azurewebsites.net/v3?vector=CVSS:3.1/${vector}`
        );

        const result = await res.json();
        const base_score = result.base_score;
        const temporal_score = result.temporal_score;
        const modified_isc_base = result.modified_isc_base; //MISS
        const modified_isc = result.modified_isc; //ModifiedImpact
        const modified_esc = result.modified_esc; //ModifiedExploitability
        const environmental_score = result.environmental_score;

        console.log(`---------------------------------------------------------`);
        console.log(`Calculated Vector:                   ${vector}`);
        console.log(`API Vector:                          ${result.vector.slice(9)}`);
        console.log(`Calculated Base Score:               ${base}`);
        console.log(`API Base Score:                      ${base_score}`);
        console.log(`Calculated Temporal Score:           ${temporal}`);
        console.log(`API Temporal Score:                  ${temporal_score}`);
        console.log(`Calculated MISS:                     ${MISS}`);
        console.log(`API MISS:                            ${modified_isc_base}`);
        console.log(`Calculated Modified Impact:          ${ModifiedImpact}`);
        console.log(`API Modified Impact:                 ${modified_isc}`);
        console.log(`Calculated Modified Exploitability:  ${ModifiedExploitability}`);
        console.log(`API Modified Exploitability:         ${modified_esc}`);
        console.log(`Calculated Environmental Score:      ${environmental}`);
        console.log(`API Environmental Score:             ${environmental_score}`);
        console.log(`---------------------------------------------------------`);
      } catch (err) {
        console.log(err.message); //can be console.error
      }
    })();
  }

  counter++;
}

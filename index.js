import * as data from './data/data.js';
import * as helper from './helper.js';

let counter = 0;
const blocker = 1000;

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
    const environmental = Overall_CVSS_vector.EnvironmentalScore;

    (async () => {
      try {
        const res = await fetch(
          `https://cvss-vector-validator-bxdqdebdh0hcb6cz.germanywestcentral-01.azurewebsites.net/v3?vector=CVSS:3.1/${vector}` // string interpolation
        );
        const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
        //console.log('Status Code:', res.status);
        //console.log('Date in Response header:', headerDate);

        const result = await res.json();
        const base_score = result.base_score;
        const temporal_score = result.temporal_score;
        const environmental_score = result.environmental_score;

        if (base === base_score) {
          //console.log('Base Score is valid');
        } else {
          console.error(
            `Base Score is not valid from calculatro ${base} and from API ${base_score} and calculated vector is ${vector}`
          );
        }

        if (temporal === temporal_score) {
          //console.log('Temporal Score is valid');
        } else {
          console.error(
            `Temporal Score is not valid from calculatro ${temporal} and from API ${temporal_score} and calculated vector is ${vector}`
          );
        }

        if (environmental === environmental_score) {
          //console.log('Environmental Score is valid');
        } else {
          console.error(
            `Environmental Score is not valid from calculatro ${environmental} and from API ${environmental_score} and calculated vector is ${vector}`
          );
        }
      } catch (err) {
        console.log(err.message); //can be console.error
      }
    })();
  }

  counter++;
}

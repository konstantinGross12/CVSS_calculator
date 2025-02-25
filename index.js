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
  //console.log(Overall_CVSS_vector.vector);

  //console.log(`BaseScore is  ${Overall_CVSS_vector.BaseScore}`);
  //console.log(`TemporalScore is  ${Overall_CVSS_vector.TemporalScore}`);
  //console.log(`EnvironmentalScore is  ${Overall_CVSS_vector.EnvironmentalScore}`);
}

(async () => {
  try {
    const res = await fetch(
      'https://cvss-vector-validator-bxdqdebdh0hcb6cz.germanywestcentral-01.azurewebsites.net/v3?vector=CVSS:3.1/AV:P/AC:H/PR:N/UI:N/S:C/C:N/I:L/A:H/E:F/RL:X/RC:C/CR:M/IR:X/AR:L/MAV:X/MAC:H/MPR:H/MUI:N/MS:X/MC:N/MI:X/MA:N'
    );
    const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);

    const result = await res.json();

    console.log(result);
  } catch (err) {
    console.log(err.message); //can be console.error
  }
})();

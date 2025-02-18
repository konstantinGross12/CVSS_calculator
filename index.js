import * as data from './data/data.js';
import * as helper from './helper.js';

let input = helper.input_base_full_randomzer(data.base_full_input_data);

let CVSS_base_score;
let impact_sub_score;
let exploitability_sub_score;
let CVSS_temporal_score;
let CVSS_environmental_score;
let CVSS_modified_score;
let Overall_CVSS_score;
let Overall_CVSS_vector = helper.calculate_Overall_CVSS_vector(input, data);

console.log(Overall_CVSS_vector);

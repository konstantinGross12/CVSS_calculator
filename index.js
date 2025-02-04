import * as data from "./data/data.js";

//console.log('Hello World');
console.log("Here I display Attack Vector");
console.log(data.av);
console.log("--------------------------------");
console.log("Here I display Attack Complexity");
console.log(data.ac);

let CVSS_base_score;
let impact_sub_score;
let exploitability_sub_score;
let CVSS_temporal_score;
let CVSS_environmental_score;
let CVSS_modified_score;
let Overall_CVSS_score;

let Overall_CVSS_vector;

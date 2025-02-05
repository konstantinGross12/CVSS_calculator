import * as data from "./data/data.js";

console.log("Base");
console.log("Attack Vector");
console.log(data.av);
console.log("Attack Complexity");
console.log(data.ac);
console.log("Privileges Required - Low and High values to be discussed");
console.log(data.pr);
console.log("User Interaction");
console.log(data.ui);
console.log("Scope is mssing in the CVSS Docu");
console.log("Confidentiality Impact");
console.log(data.c);
console.log("Integrity Impact");
console.log(data.i);
console.log("Availability Impact");
console.log(data.a);
console.log("--------------------------------");
console.log("Temporal");
console.log("Exploit Code Maturity");
console.log(data.e);
console.log("Remediation Level");
console.log(data.rl);
console.log("Report Confidence");
console.log(data.rc);
console.log("--------------------------------");
console.log("Environmental");
console.log("Attack Vector (MAV) - Not Defined missing a value from CVSS Docu");
console.log(data.mav);
console.log(
  "Attack Complexity (MAC) - Not Defined missing a value from CVSS Docu"
);
console.log(data.mac);
console.log(
  "Privileges Required (MPR) - Low and High values to be discussed - Not Defined missing a value from CVSS Docu"
);
console.log(data.mpr);
console.log(
  "User Interaction(MUI) - Not Defined missing a value from CVSS Docu"
);
console.log(data.mui);
console.log("Scope (MS) is mssing in the CVSS Docu");
console.log(
  "Confidentiality Impact (MC) - Not Defined missing a value from CVSS Docu"
);
console.log(data.mc);
console.log(
  "Integrity Impact (MI) - Not Defined missing a value from CVSS Docu"
);
console.log(data.mi);
console.log(
  "Availability Impact (MA) - Not Defined missing a value from CVSS Docu"
);
console.log(data.ma);
console.log("Confidentiality Requirement (CR)");
console.log(data.cr);
console.log("Integrity Requirement (IR)");
console.log(data.ir);
console.log("Availability Requirement (AR)");
console.log(data.ar);

let CVSS_base_score;
let impact_sub_score;
let exploitability_sub_score;
let CVSS_temporal_score;
let CVSS_environmental_score;
let CVSS_modified_score;
let Overall_CVSS_score;

let Overall_CVSS_vector;

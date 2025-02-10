import * as data from './data/data.js';
import * as helper from './helper.js';

let input = [775000002, 775000001, 775000002];
/*
console.log('Base');
console.log('Attack Vector');
console.log(data.av);
console.log('Attack Complexity');
console.log(data.ac);
console.log('Privileges Required - Low and High values to be discussed');
console.log(data.pr);
console.log('User Interaction');
console.log(data.ui);
console.log('Scope is mssing in the CVSS Docu');
console.log('Confidentiality Impact');
console.log(data.c);
console.log('Integrity Impact');
console.log(data.i);
console.log('Availability Impact');
console.log(data.a);
console.log('--------------------------------');
console.log('Temporal');
console.log('Exploit Code Maturity');
console.log(data.e);
console.log('Remediation Level');
console.log(data.rl);
console.log('Report Confidence');
console.log(data.rc);
console.log('--------------------------------');
console.log('Environmental');
console.log('Attack Vector (MAV) - Not Defined missing a value from CVSS Docu');
console.log(data.mav);
console.log('Attack Complexity (MAC) - Not Defined missing a value from CVSS Docu');
console.log(data.mac);
console.log(
  'Privileges Required (MPR) - Low and High values to be discussed - Not Defined missing a value from CVSS Docu'
);
console.log(data.mpr);
console.log('User Interaction(MUI) - Not Defined missing a value from CVSS Docu');
console.log(data.mui);
console.log('Scope (MS) is mssing in the CVSS Docu');
console.log('Confidentiality Impact (MC) - Not Defined missing a value from CVSS Docu');
console.log(data.mc);
console.log('Integrity Impact (MI) - Not Defined missing a value from CVSS Docu');
console.log(data.mi);
console.log('Availability Impact (MA) - Not Defined missing a value from CVSS Docu');
console.log(data.ma);
console.log('Confidentiality Requirement (CR)');
console.log(data.cr);
console.log('Integrity Requirement (IR)');
console.log(data.ir);
console.log('Availability Requirement (AR)');
console.log(data.ar);

console.log('Base Score Calculation');
// Consits of three calculated values: Impact Sub Score (ISS), Impact & Exploitability
// 1) ISS = 	1 - [ (1 - Confidentiality) × (1 - Integrity) × (1 - Availability) ]

// 2) Impact =
// If Scope is Unchanged:	6.42 × ISS
// If Scope is Changed	7.52 × (ISS - 0.029) - 3.25 × (ISS - 0.02)hoch 15

// 3) Exploitability = 	8.22 × AttackVector × AttackComplexity × 	PrivilegesRequired × UserInteraction

// Ends up in Base Score:
// If Impact \<= 0 --> 	0, else
// If Scope is Unchanged -->	Roundup (Minimum [(Impact + Exploitability), 10])
// If Scope is Changed -->	Roundup (Minimum [1.08 × (Impact + Exploitability), 10])

//FRAGE: Was ist Scope changed?? Es ist nicht!! Modified Scope!!

let CVSS_base_score;
let impact_sub_score;
let exploitability_sub_score;

console.log('Temporal Score Calculation');
// Consits of one calculation
// 1) TemporalScore =	Roundup (BaseScore × ExploitCodeMaturity × RemediationLevel × ReportConfidence)

let CVSS_temporal_score;

console.log('Environmental Score Calculation');
// Consits of three calculated values: Modified Impact Sub-Score(MISS), ModifiedImpact & ModifiedExploitability
// 1) MISS =	Minimum ( 1 - [ (1 - ConfidentialityRequirement × ModifiedConfidentiality) × (1 - IntegrityRequirement × ModifiedIntegrity) × (1 - AvailabilityRequirement × ModifiedAvailability) ], 0.915)

// 2) ModifiedImpact =
// If ModifiedScope is Unchanged	6.42 × MISS
// If ModifiedScope is Changed	7.52 × (MISS - 0.029) - 3.25 × (MISS × 0.9731 - 0.02)hoch13 (für 3.1 differs to 3.0 vector type)

// 3) ModifiedExploitability =	8.22 × ModifiedAttackVector × ModifiedAttackComplexity × ModifiedPrivilegesRequired × ModifiedUserInteraction

//Ends up in Environmental Score: TBD

//FRAGE: Was machen wir mit verschiedenen Vector Typen?
*/
let CVSS_environmental_score;
let CVSS_modified_score;

let Overall_CVSS_score;
let Overall_CVSS_vector = helper.calculate_Overall_CVSS_vector(input, data.data);

console.log(Overall_CVSS_vector);

//#region BASE

//Attack Vector
export const av = [
  {
    label: 'Network',
    value_calcultation: 0.85,
    dataverse_label: 'Network',
    dataverse_value: 775000000,
    string_value: 'AV:N',
  },
  {
    label: 'Adjacent',
    value_calcultation: 0.62,
    dataverse_label: 'Adjacent Network',
    dataverse_value: 775000001,
    string_value: 'AV:A',
  },
  {
    label: 'Local',
    value_calcultation: 0.55,
    dataverse_label: 'Local',
    dataverse_value: 775000002,
    string_value: 'AV:L',
  },
  {
    label: 'Physical',
    value_calcultation: 0.2,
    dataverse_label: 'Physical',
    dataverse_value: 775000003,
    string_value: 'AV:P',
  },
];
//Attack Complexity
export const ac = [
  {
    label: 'Low',
    value_calcultation: 0.77,
    dataverse_label: 'Low',
    dataverse_value: 775000000,
    string_value: 'AC:L',
  },
  {
    label: 'High',
    value_calcultation: 0.44,
    dataverse_label: 'High',
    dataverse_value: 775000001,
    string_value: 'AC:H',
  },
];
//Privileges Required
export const pr = [
  {
    label: 'None',
    value_calcultation: 0.85,
    dataverse_label: 'None',
    dataverse_value: 775000000,
    string_value: 'PR:N',
  },
  {
    label: 'Low',
    value_calcultation: 0.62, //!!0.62 needs to be discussed!!
    dataverse_label: 'Low',
    dataverse_value: 775000001,
    string_value: 'PR:L',
  },
  {
    label: 'High',
    value_calcultation: 0.27, //!!0.27  needs to be discussed!!
    dataverse_label: 'High',
    dataverse_value: 775000002,
    string_value: 'PR:H',
  },
];
//User Interaction
export const ui = [
  {
    label: 'None',
    value_calcultation: 0.85,
    dataverse_label: 'None',
    dataverse_value: 775000000,
    string_value: 'UI:N',
  },
  {
    label: 'Required',
    value_calcultation: 0.62,
    dataverse_label: 'Required',
    dataverse_value: 775000001,
    string_value: 'UI:R',
  },
];

export const s = [
  {
    label: 'Unchanged',
    value_calcultation: null,
    dataverse_label: 'Unchanged',
    dataverse_value: 775000000,
    string_value: 'S:U',
  },
  {
    label: 'Changed',
    value_calcultation: null,
    dataverse_label: 'Changed',
    dataverse_value: 775000001,
    string_value: 'S:C',
  },
];

//Confidentiality Impact
export const c = [
  {
    label: 'High',
    value_calcultation: 0.56,
    dataverse_label: 'High',
    dataverse_value: 775000002,
    string_value: 'C:H',
  },
  {
    label: 'Low',
    value_calcultation: 0.22,
    dataverse_label: 'Low',
    dataverse_value: 775000001,
    string_value: 'C:L',
  },
  {
    label: 'None',
    value_calcultation: 0,
    dataverse_label: 'None',
    dataverse_value: 775000000,
    string_value: 'C:N',
  },
];
// Integrity Impact
export const i = [
  {
    label: 'High',
    value_calcultation: 0.56,
    dataverse_label: 'High',
    dataverse_value: 775000002,
    string_value: 'I:H',
  },
  {
    label: 'Low',
    value_calcultation: 0.22,
    dataverse_label: 'Low',
    dataverse_value: 775000001,
    string_value: 'I:L',
  },
  {
    label: 'None',
    value_calcultation: 0,
    dataverse_label: 'None',
    dataverse_value: 775000000,
    string_value: 'I:N',
  },
];
//Availability Impact
export const a = [
  {
    label: 'High',
    value_calcultation: 0.56,
    dataverse_label: 'High',
    dataverse_value: 775000002,
    string_value: 'A:H',
  },
  {
    label: 'Low',
    value_calcultation: 0.22,
    dataverse_label: 'Low',
    dataverse_value: 775000001,
    string_value: 'A:L',
  },
  {
    label: 'None',
    value_calcultation: 0,
    dataverse_label: 'None',
    dataverse_value: 775000000,
    string_value: 'A:N',
  },
];
//#endregion
//#region TEMPORAL

//Exploit Code Maturity
export const e = [
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'E:X',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'E:X',
  },
  {
    label: 'High',
    value_calcultation: 1,
    dataverse_label: 'High',
    dataverse_value: 775000004,
    string_value: 'E:H',
  },
  {
    label: 'Functional',
    value_calcultation: 0.97,
    dataverse_label: 'Functional exploit exists',
    dataverse_value: 775000003,
    string_value: 'E:F',
  },
  {
    label: 'Proof of Concept',
    value_calcultation: 0.94,
    dataverse_label: 'Proof of concept code',
    dataverse_value: 775000002,
    string_value: 'E:P',
  },
  {
    label: 'Unproven',
    value_calcultation: 0.91,
    dataverse_label: 'Unproven that exploit exists',
    dataverse_value: 775000001,
    string_value: 'E:U',
  },
];
//Remediation Level
export const rl = [
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'RL:X',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'RL:X',
  },
  {
    label: 'Unavailable',
    value_calcultation: 1,
    dataverse_label: 'Unavailable',
    dataverse_value: 775000004,
    string_value: 'RL:U',
  },
  {
    label: 'Workaround',
    value_calcultation: 0.97,
    dataverse_label: 'Workaround',
    dataverse_value: 775000003,
    string_value: 'RL:W',
  },
  {
    label: 'Temporary Fix',
    value_calcultation: 0.96,
    dataverse_label: 'Temporary fix',
    dataverse_value: 775000002,
    string_value: 'RL:T',
  },
  {
    label: 'Official Fix',
    value_calcultation: 0.95,
    dataverse_label: 'Official fix',
    dataverse_value: 775000001,
    string_value: 'RL:O',
  },
];
//Report Confidence
export const rc = [
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'RC:X',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'RC:X',
  },
  {
    label: 'Confirmed',
    value_calcultation: 1,
    dataverse_label: 'Confirmed',
    dataverse_value: 775000003,
    string_value: 'RC:C',
  },
  {
    label: 'Reasonable',
    value_calcultation: 0.96,
    dataverse_label: 'Reasonable',
    dataverse_value: 775000002,
    string_value: 'RC:R',
  },
  {
    label: 'Unknown',
    value_calcultation: 0.92,
    dataverse_label: 'Unknown',
    dataverse_value: 775000001,
    string_value: 'RC:U',
  },
];
//#endregion
//#region ENVIRONMENTAL

//Attack Vector(MAV)
export const mav = [
  {
    label: 'Network',
    value_calcultation: 0.85,
    dataverse_label: 'Network',
    dataverse_value: 775000001,
    string_value: 'MAV:N',
  },
  {
    label: 'Adjacent',
    value_calcultation: 0.62,
    dataverse_label: 'Adjacent Network',
    dataverse_value: 775000002,
    string_value: 'MAV:A',
  },
  {
    label: 'Local',
    value_calcultation: 0.55,
    dataverse_label: 'Local',
    dataverse_value: 775000003,
    string_value: 'MAV:L',
  },
  {
    label: 'Physical',
    value_calcultation: 0.2,
    dataverse_label: 'Physical',
    dataverse_value: 775000004,
    string_value: 'MAV:P',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'MAV:X',
  },
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'MAV:X',
  },
];
// Attack Complexity (MAC)
export const mac = [
  {
    label: 'Low',
    value_calcultation: 0.77,
    dataverse_label: 'Low',
    dataverse_value: 775000001,
    string_value: 'MAC:L',
  },
  {
    label: 'High',
    value_calcultation: 0.44,
    dataverse_label: 'High',
    dataverse_value: 775000002,
    string_value: 'MAC:H',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'MAC:X',
  },
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'MAC:X',
  },
];
//Privileges Required (MPR)
export const mpr = [
  {
    label: 'None',
    value_calcultation: 0.85,
    dataverse_label: 'None',
    dataverse_value: 775000001,
    string_value: 'MPR:N',
  },
  {
    label: 'Low',
    value_calcultation: 0.62, //!!0.62 needs to be discussed!!
    dataverse_label: 'Low',
    dataverse_value: 775000002,
    string_value: 'MPR:L',
  },
  {
    label: 'High',
    value_calcultation: 0.27, //!!0.27 needs to be discussed!!
    dataverse_label: 'High',
    dataverse_value: 775000003,
    string_value: 'MPR:H',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'MPR:X',
  },
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'MPR:X',
  },
];
//User Interaction (MUI)
export const mui = [
  {
    label: 'None',
    value_calcultation: 0.85,
    dataverse_label: 'None',
    dataverse_value: 775000001,
    string_value: 'MUI:N',
  },
  {
    label: 'Required',
    value_calcultation: 0.62,
    dataverse_label: 'Required',
    dataverse_value: 775000002,
    string_value: 'MUI:R',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'MUI:X',
  },
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'MUI:X',
  },
];
// Modified Scope (MS)
export const ms = [
  {
    label: 'Unchanged',
    value_calcultation: null,
    dataverse_label: 'Unchanged',
    dataverse_value: 775000001,
    string_value: 'MS:U',
  },
  {
    label: 'Changed',
    value_calcultation: null,
    dataverse_label: 'Changed',
    dataverse_value: 775000002,
    string_value: 'MS:C',
  },
  {
    label: 'Not Defined',
    value_calcultation: null,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'MS:X',
  },
  {
    label: 'Null',
    value_calcultation: null,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'MS:X',
  },
];
//Confidentiality Impact (MC)
export const mc = [
  {
    label: 'High',
    value_calcultation: 0.56,
    dataverse_label: 'High',
    dataverse_value: 775000003,
    string_value: 'MC:H',
  },
  {
    label: 'Low',
    value_calcultation: 0.22,
    dataverse_label: 'Low',
    dataverse_value: 775000002,
    string_value: 'MC:L',
  },
  {
    label: 'None',
    value_calcultation: 0,
    dataverse_label: 'None',
    dataverse_value: 775000001,
    string_value: 'MC:N',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'MC:X',
  },
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'MC:X',
  },
];
//Integrity Impact (MI)
export const mi = [
  {
    label: 'High',
    value_calcultation: 0.56,
    dataverse_label: 'High',
    dataverse_value: 775000003,
    string_value: 'MI:H',
  },
  {
    label: 'Low',
    value_calcultation: 0.22,
    dataverse_label: 'Low',
    dataverse_value: 775000002,
    string_value: 'MI:L',
  },
  {
    label: 'None',
    value_calcultation: 0,
    dataverse_label: 'None',
    dataverse_value: 775000001,
    string_value: 'MI:N',
  },
  {
    label: 'Not Defined',
    value_calcultation: 0,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'MI:X',
  },
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'MI:X',
  },
];
//Availability Impact (MA)
export const ma = [
  {
    label: 'High',
    value_calcultation: 0.56,
    dataverse_label: 'High',
    dataverse_value: 775000003,
    string_value: 'MA:H',
  },
  {
    label: 'Low',
    value_calcultation: 0.22,
    dataverse_label: 'Low',
    dataverse_value: 775000002,
    string_value: 'MA:L',
  },
  {
    label: 'None',
    value_calcultation: 0,
    dataverse_label: 'None',
    dataverse_value: 775000001,
    string_value: 'MA:N',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'MA:X',
  },
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'MA:X',
  },
];
//Confidentiality Requirement (CR)
export const cr = [
  {
    label: 'Null',
    value_calcultation: null,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'CR:X',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'CR:X',
  },
  {
    label: 'High',
    value_calcultation: 1.5,
    dataverse_label: 'High',
    dataverse_value: 775000003,
    string_value: 'CR:H',
  },
  {
    label: 'Medium',
    value_calcultation: 1,
    dataverse_label: 'Medium',
    dataverse_value: 775000002,
    string_value: 'CR:M',
  },
  {
    label: 'Low',
    value_calcultation: 0.5,
    dataverse_label: 'Low',
    dataverse_value: 775000001,
    string_value: 'CR:L',
  },
];
//Integrity Requirement (IR)
export const ir = [
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'IR:X',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'IR:X',
  },
  {
    label: 'High',
    value_calcultation: 1.5,
    dataverse_label: 'High',
    dataverse_value: 775000003,
    string_value: 'IR:H',
  },
  {
    label: 'Medium',
    value_calcultation: 1,
    dataverse_label: 'Medium',
    dataverse_value: 775000002,
    string_value: 'IR:M',
  },
  {
    label: 'Low',
    value_calcultation: 0.5,
    dataverse_label: 'Low',
    dataverse_value: 775000001,
    string_value: 'IR:L',
  },
];
//Availability Requirement (AR)
export const ar = [
  {
    label: 'Null',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: null,
    string_value: 'AR:X',
  },
  {
    label: 'Not Defined',
    value_calcultation: 1,
    dataverse_label: 'Not Defined',
    dataverse_value: 775000000,
    string_value: 'AR:X',
  },
  {
    label: 'High',
    value_calcultation: 1.5,
    dataverse_label: 'High',
    dataverse_value: 775000003,
    string_value: 'AR:H',
  },
  {
    label: 'Medium',
    value_calcultation: 1,
    dataverse_label: 'Medium',
    dataverse_value: 775000002,
    string_value: 'AR:M',
  },
  {
    label: 'Low',
    value_calcultation: 0.5,
    dataverse_label: 'Low',
    dataverse_value: 775000001,
    string_value: 'AR:L',
  },
];
//#endregion
// Happy Path
export const base_full_input_data = [
  // base part
  { id: 'av', values: [775000000, 775000001, 775000002, 775000003] }, // AV
  { id: 'ac', values: [775000000, 775000001] }, // AC
  { id: 'pr', values: [775000000, 775000001, 775000002] }, // PR
  { id: 'ui', values: [775000000, 775000001] }, // UI
  { id: 's', values: [775000000, 775000001] }, // S
  { id: 'c', values: [775000000, 775000001, 775000002] }, // C
  { id: 'i', values: [775000000, 775000001, 775000002] }, // I
  { id: 'a', values: [775000000, 775000001, 775000002] }, // A
  // temporal part
  { id: 'e', values: [775000000, 775000001, 775000002, 775000003, 775000004] }, // E
  { id: 'rl', values: [775000000, 775000001, 775000002, 775000003, 775000004] }, // RL
  { id: 'rc', values: [775000000, 775000001, 775000002, 775000003] }, // RC
  // environmental part
  {
    id: 'mav',
    values: [775000000, 775000001, 775000002, 775000003, 775000004],
  }, // MAV
  { id: 'mac', values: [775000000, 775000001, 775000002] }, // MAC
  { id: 'mpr', values: [775000000, 775000001, 775000002, 775000003] }, // MPR
  { id: 'mui', values: [775000000, 775000001] }, // MUI
  { id: 'ms', values: [775000000, 775000001, 775000002] }, // MS
  { id: 'mc', values: [775000000, 775000001, 775000002] }, // MC
  { id: 'mi', values: [775000000, 775000001, 775000002] }, // MI
  { id: 'ma', values: [775000000, 775000001, 775000002] }, // MA
  { id: 'cr', values: [775000000, 775000001, 775000002, 775000003] }, // CR
  { id: 'ir', values: [775000000, 775000001, 775000002, 775000003] }, // IR
  { id: 'ar', values: [775000000, 775000001, 775000002, 775000003] }, // AR
];

// Worst Case

export const base_full_input_data_worst_case = [
  { id: 'av', values: [77500033, '775000001', 775000002, 775000003] }, // AV
  { id: 'ac', values: [775000000, null] }, // AC
  { id: 'pr', values: [775000000, 775000001, 775000002] }, // PR
  // S
  { id: 'c', values: [null, null, null] }, // C
  { id: 'i', values: [775000000, 775000001, 775000002] }, // I
  { id: 'a', values: [775000000, 775000001, 775000002] }, // A
];

// Some vaules are missing

export const base_full_input_data_some_missing = [
  { id: 'av', values: [775000000, 775000001, 775000002, 775000003] }, // AV
  { id: 'ac', values: [775000000, 775000001] }, // AC
  { id: 'pr', values: [775000000, 775000001, 775000002] }, // PR
  { id: 'ui', values: [775000000, 775000001] }, // UI
  { id: 's', values: [775000000, 775000001] }, // S
  { id: 'c', values: [775000000, 775000001, 775000002] }, // C
  { id: 'i', values: [775000000, 775000001, 775000002] }, // I
  { id: 'a', values: [775000000, 775000001, 775000002] }, // A
  // temporal part
  { id: 'e', values: [null] }, // E
  { id: 'rl', values: [null] }, // RL
  { id: 'rc', values: [null] }, // RC
  // environmental part
  {
    id: 'mav',
    values: [null],
  }, // MAV
  { id: 'mac', values: [null] }, // MAC
  { id: 'mpr', values: [null] }, // MPR
  { id: 'mui', values: [null] }, // MUI
  { id: 'ms', values: [null] }, // MS
  { id: 'mc', values: [null] }, // MC
  { id: 'mi', values: [null] }, // MI
  { id: 'ma', values: [null] }, // MA
  { id: 'cr', values: [null] }, // CR
  { id: 'ir', values: [null] }, // IR
  { id: 'ar', values: [null] }, // AR
];

//BASE
//Attack Vector
export const av = [
  {
    label: "Network",
    value_calcultation: 0.85,
    dataverse_label: "Network",
    dataverse_value: 775000000,
    string_value: "AV:N",
  },
  {
    label: "Adjacent",
    value_calcultation: 0.62,
    dataverse_label: "Adjacent Network",
    dataverse_value: 775000001,
    string_value: "AV:A",
  },
  {
    label: "Local",
    value_calcultation: 0.55,
    dataverse_label: "Local",
    dataverse_value: 775000002,
    string_value: "AV:L",
  },
  {
    label: "Physical",
    value_calcultation: 0.2,
    dataverse_label: "Physical",
    dataverse_value: 775000003,
    string_value: "AV:P",
  },
];
//Attack Complexity
export const ac = [
  {
    label: "Low",
    value_calcultation: 0.77,
    dataverse_label: "Low",
    dataverse_value: 775000000,
    string_value: "AC:L",
  },
  {
    label: "High",
    value_calcultation: 0.44,
    dataverse_label: "High",
    dataverse_value: 775000001,
    string_value: "AC:H",
  },
];
//Privileges Required
export const pr = [
  {
    label: "None",
    value_calcultation: 0.85,
    dataverse_label: "None",
    dataverse_value: 775000000,
    string_value: "PR:N",
  },
  {
    label: "Low",
    value_calcultation: 0.62, //!!0.62 needs to be discussed!!
    dataverse_label: "Low",
    dataverse_value: 775000001,
    string_value: "PR:L",
  },
  {
    label: "High",
    value_calcultation: 0.27, //!!0.27  needs to be discussed!!
    dataverse_label: "High",
    dataverse_value: 775000002,
    string_value: "PR:H",
  },
];
//User Interaction
export const ui = [
  {
    label: "None",
    value_calcultation: 0.85,
    dataverse_label: "None",
    dataverse_value: 775000000,
    string_value: "UI:N",
  },
  {
    label: "Required",
    value_calcultation: 0.62,
    dataverse_label: "Required",
    dataverse_value: 775000001,
    string_value: "UI:R",
  },
];
//Scope is missing in the CVSS Docu
//Confidentiality Impact
export const c = [
  {
    label: "High",
    value_calcultation: 0.56,
    dataverse_label: "High",
    dataverse_value: 775000002,
    string_value: "C:H",
  },
  {
    label: "Low",
    value_calcultation: 0.22,
    dataverse_label: "Low",
    dataverse_value: 775000001,
    string_value: "C:L",
  },
  {
    label: "None",
    value_calcultation: 0,
    dataverse_label: "None",
    dataverse_value: 775000000,
    string_value: "C:N",
  },
];
// Integrity Impact
export const i = [
  {
    label: "High",
    value_calcultation: 0.56,
    dataverse_label: "High",
    dataverse_value: 775000002,
    string_value: "I:H",
  },
  {
    label: "Low",
    value_calcultation: 0.22,
    dataverse_label: "Low",
    dataverse_value: 775000001,
    string_value: "I:L",
  },
  {
    label: "None",
    value_calcultation: 0,
    dataverse_label: "None",
    dataverse_value: 775000000,
    string_value: "I:N",
  },
];
//Availability Impact
export const a = [
  {
    label: "High",
    value_calcultation: 0.56,
    dataverse_label: "High",
    dataverse_value: 775000002,
    string_value: "A:H",
  },
  {
    label: "Low",
    value_calcultation: 0.22,
    dataverse_label: "Low",
    dataverse_value: 775000001,
    string_value: "A:L",
  },
  {
    label: "None",
    value_calcultation: 0,
    dataverse_label: "None",
    dataverse_value: 775000000,
    string_value: "A:N",
  },
];

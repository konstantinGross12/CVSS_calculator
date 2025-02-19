export const input_base_full_randomzer = function (input_data) {
  let result = [
    // base part
    { id: 'av', value: null },
    { id: 'ac', value: null },
    { id: 'pr', value: null },
    { id: 'ui', value: null },
    { id: 's', value: null },
    { id: 'c', value: null },
    { id: 'i', value: null },
    { id: 'a', value: null },
    // temporal part
    { id: 'e', value: null },
    { id: 'rl', value: null },
    { id: 'rc', value: null },

    // environmental part
    { id: 'mav', value: null },
    { id: 'mac', value: null },
    { id: 'mpr', value: null },
    { id: 'mui', value: null },
    { id: 'ms', value: null },
    { id: 'mc', value: null },
    { id: 'mi', value: null },
    { id: 'ma', value: null },
    { id: 'cr', value: null },
    { id: 'ir', value: null },
    { id: 'ar', value: null },
  ];

  for (const input_object of input_data) {
    const input_id = input_object.id;
    const result_index = result.findIndex((element) => element.id === input_id);

    const randox_index = Math.floor(Math.random() * input_object.values.length);

    const random_value = input_object.values[randox_index];

    result[result_index].value = random_value;
    if (input_id === 'mac') {
    }
  }

  return result;
};

export const Minimum = function (val_1, val_2) {
  return val_1 < val_2 ? val_1 : val_2;
};

export const Roundup = function (input) {
  //return Math.ceil(input * 10) / 10;

  let int_input = Math.round(input * 100000);
  if (int_input % 10000 === 0) {
    return int_input / 100000.0;
  } else {
    return (Math.floor(int_input / 10000) + 1) / 10.0;
  }
};

export const ISS = function (confidentiality, integrity, availability) {
  return 1 - (1 - confidentiality) * (1 - integrity) * (1 - availability);
};
export const calculate_impact = function (ISS, scope_value) {
  if (scope_value === 'Unchanged') {
    return 6.42 * ISS;
  }
  if (scope_value === 'Changed') {
    return 7.52 * (ISS - 0.029) - 3.25 * Math.pow(ISS - 0.02, 15);
  }
};
export const calculate_exploitability = function (av, ac, pr, ui, s) {
  let pr_internal = 0;
  if (pr === 'None') {
    pr_internal = 0.85;
  }
  if (pr === 'Low') {
    pr_internal = s === 'Unchanged' ? 0.62 : 0.68;
  }
  if (pr === 'High') {
    pr_internal = s === 'Unchanged' ? 0.27 : 0.5;
  }
  return 8.22 * av * ac * pr_internal * ui;
};
export const calculate_base_score = function (Impact, exploitability, scope_value) {
  if (Impact <= 0) {
    return 0;
  }
  if (scope_value === 'Unchanged') {
    return Roundup(Minimum(Impact + exploitability, 10));
  }
  if (scope_value === 'Changed') {
    return Roundup(Minimum(1.08 * (Impact + exploitability), 10));
  }
};

export const calculate_temporal_score = function (BaseScore, e, rl, rc) {
  return Roundup(BaseScore * e * rl * rc);
};

export const calculate_MISS = function (cr, mc, ir, mi, ar, ma) {
  const first_value = 1 - (1 - cr * mc) * (1 - ir * mi) * (1 - ar * ma);
  const second_value = 0.915;
  const result = Minimum(first_value, second_value);

  return result;
};

export const calculate_ModifiedImpact = function (MISS, modified_scope_value) {
  if (modified_scope_value === 'Unchanged') {
    const result = 6.42 * MISS;
    debugger;
    return result;
  }
  if (modified_scope_value === 'Changed') {
    const result = 7.52 * (MISS - 0.029) - 3.25 * Math.pow(MISS * 0.9731 - 0.02, 13);
    //debugger;
    return result;
  }
};

export const calculate_ModifiedExploitability = function (mav = 1, mac = 1, mpr, mui = 1, modified_scope_value) {
  let mpr_internal;
  if (mpr === 'None') {
    debugger;
    mpr_internal = 0.85;
  }
  if (mpr === 'Low') {
    debugger;
    mpr_internal = modified_scope_value === 'Changed' ? 0.68 : 0.62; // looks like a bug
  }
  if (mpr === 'High') {
    debugger;
    mpr_internal = modified_scope_value === 'Unchanged' ? 0.5 : 0.27; // looks good
  }
  const result = 8.22 * mav * mac * mpr_internal * mui;

  debugger;
  return result;
};

export const calculate_EnvironmentalScore = function (
  ModifiedImpact,
  ModifiedExploitability,
  modified_scope_value,
  e = 1.0,
  rl = 1.0,
  rc = 1.0
) {
  if (ModifiedImpact <= 0) {
    debugger;
    return 0;
  }
  if (modified_scope_value === 'Unchanged') {
    //Roundup ( Roundup [Minimum ([ModifiedImpact + ModifiedExploitability], 10) ] × ExploitCodeMaturity × RemediationLevel × ReportConfidence)
    let result = Roundup(Roundup(Minimum(ModifiedImpact + ModifiedExploitability, 10)) * e * rl * rc);
    debugger;
    return result;
  }
  if (modified_scope_value === 'Changed') {
    //Roundup ( Roundup [Minimum (1.08 × [ModifiedImpact + ModifiedExploitability], 10) ] × ExploitCodeMaturity × RemediationLevel × ReportConfidence)
    let first_part = Roundup(Math.min(1.08 * (ModifiedImpact + ModifiedExploitability), 10));
    let result = Roundup(first_part * e * rl * rc);
    // 4.8 = 1.08 * (3.31 + x) * 0.95
    // x is ca. 0968  oder 1
    debugger;
    return result;
  }
};

export const calculate_Overall_CVSS_vector = function (input, data) {
  let vector = '';
  // ISS inputs
  let confidentiality;
  let integrity;
  let availability;
  let scope_value = '';
  let av;
  let ac;
  let pr;
  let ui;
  let e;
  let rl;
  let rc;
  let cr;
  let mc;
  let ir;
  let mi;
  let ar;
  let ma;
  let modified_scope_value = '';
  let mav;
  let mac;
  let mpr;
  let mui;

  for (let index = 0; index < input.length; index++) {
    // input elements
    const input_element = input[index];
    const input_element_id = input_element.id;
    const input_element_value = input_element.value;
    // data elements
    const data_element_array = data[input_element_id];

    for (const data_obj of data_element_array) {
      //console.log(data_obj);
      if (data_obj.dataverse_value === input_element_value) {
        vector += `${data_obj.string_value}/`;
        if (input_element_id === 'c') {
          confidentiality = data_obj.value_calcultation;
        }
        if (input_element_id === 'i') {
          integrity = data_obj.value_calcultation;
        }
        if (input_element_id === 'a') {
          availability = data_obj.value_calcultation;
        }
        if (input_element_id === 's') {
          scope_value = data_obj.label;
        }
        if (input_element_id === 'av') {
          av = data_obj.value_calcultation;
        }
        if (input_element_id === 'ac') {
          ac = data_obj.value_calcultation;
        }
        if (input_element_id === 'pr') {
          pr = data_obj.label;
        }
        if (input_element_id === 'ui') {
          ui = data_obj.value_calcultation;
        }
        if (input_element_id === 'e') {
          e = data_obj.value_calcultation;
        }
        if (input_element_id === 'rl') {
          rl = data_obj.value_calcultation;
        }
        if (input_element_id === 'rc') {
          rc = data_obj.value_calcultation;
        }
        if (input_element_id === 'cr') {
          cr = data_obj.value_calcultation;
        }
        if (input_element_id === 'mc') {
          mc = data_obj.value_calcultation;
        }
        if (input_element_id === 'ir') {
          ir = data_obj.value_calcultation;
        }
        if (input_element_id === 'mi') {
          mi = data_obj.value_calcultation;
        }
        if (input_element_id === 'ar') {
          ar = data_obj.value_calcultation;
        }
        if (input_element_id === 'ma') {
          ma = data_obj.value_calcultation;
        }
        if (input_element_id === 'ms') {
          modified_scope_value = data_obj.label;
        }
        if (input_element_id === 'mav') {
          mav = data_obj.value_calcultation;
        }
        if (input_element_id === 'mac') {
          mac = data_obj.value_calcultation;
        }
        if (input_element_id === 'mpr') {
          mpr = data_obj.label;
        }
        if (input_element_id === 'mui') {
          mui = data_obj.value_calcultation;
        }
      }
    }
  }

  const ISS_value = ISS(confidentiality, integrity, availability);
  const Impact = calculate_impact(ISS_value, scope_value);
  const exploitability = calculate_exploitability(av, ac, pr, ui, scope_value);
  const BaseScore = calculate_base_score(Impact, exploitability, scope_value);
  const TemporalScore = calculate_temporal_score(BaseScore, e, rl, rc);
  const MISS = calculate_MISS(cr, mc, ir, mi, ar, ma);
  // from here with modified values
  const ModifiedImpact = calculate_ModifiedImpact(MISS, modified_scope_value);
  const ModifiedExploitability = calculate_ModifiedExploitability(mav, mac, mpr, mui, modified_scope_value);
  const EnvironmentalScore = calculate_EnvironmentalScore(
    ModifiedImpact,
    ModifiedExploitability,
    modified_scope_value,
    e,
    rl,
    rc
  );
  vector = vector.slice(0, -1);
  return {
    vector: vector,
    ISS: ISS_value,
    Impact: Impact,
    exploitability: exploitability,
    BaseScore: BaseScore,
    TemporalScore: TemporalScore,
    MISS: MISS,
    ModifiedImpact: ModifiedImpact,
    ModifiedExploitability: ModifiedExploitability,
    EnvironmentalScore: EnvironmentalScore,
  };
};

export const is_mandatory_input_given = function (input) {
  // all base object are given
  let av = false;
  let ac = false;
  let pr = false;
  let ui = false;
  let s = false;
  let c = false;
  let i = false;
  let a = false;
  for (const element of input) {
    if (
      element.id === 'av' &&
      element.value !== null &&
      [775000000, 775000001, 775000002, 775000003].includes(element.value)
    ) {
      av = true;
    }
    if (element.id === 'ac' && element.value !== null && [775000000, 775000001].includes(element.value)) {
      ac = true;
    }
    if (element.id === 'pr' && element.value !== null && [775000000, 775000001, 775000002].includes(element.value)) {
      pr = true;
    }
    if (element.id === 'ui' && element.value !== null && [775000000, 775000001].includes(element.value)) {
      ui = true;
    }
    if (element.id === 's' && element.value !== null && [775000000, 775000001].includes(element.value)) {
      s = true;
    }
    if (element.id === 'c' && element.value !== null && [775000000, 775000001, 775000002].includes(element.value)) {
      c = true;
    }
    if (element.id === 'i' && element.value !== null && [775000000, 775000001, 775000002].includes(element.value)) {
      i = true;
    }
    if (element.id === 'a' && element.value !== null && [775000000, 775000001, 775000002].includes(element.value)) {
      a = true;
    }
  }

  return av && ac && pr && ui && s && c && i && a;
};

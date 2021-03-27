export function changeEveryoneCheckbox(indexColumn) {
  return {
    type: "CHANGE_EVERYONE_CHECKBOX",
    payload: [indexColumn],
  };
}

export function changeSubMuduleCheckbox(indexColumn, indexSubModule) {
  return {
    type: "CHANGE_SUB_MODULE_CHECKBOX",
    payload: [indexColumn, indexSubModule],
  };
}

export function changeCheckbox(indexColumn, indexCheckbox, indexSubModule) {
  return {
    type: "CHANGE_CHECKBOX",
    payload: [indexColumn, indexCheckbox, indexSubModule],
  };
}

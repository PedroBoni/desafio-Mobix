export function changeCollapseSubModule(indexSubModule) {
  return {
    type: "CHANGE_COLLAPSE_SUB_MODULE",
    payload: [indexSubModule],
  };
}

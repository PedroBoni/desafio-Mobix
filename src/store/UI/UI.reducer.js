const stateInit = () => {
  let arrSubModuleCollapse = [];

  for (let i = 0; i < 4; i++) {
    arrSubModuleCollapse[i] = true;
  }
  return {
    subModuleCollapse: arrSubModuleCollapse,
  };
};

export default function (state = stateInit(), action) {
  switch (action.type) {
    case "CHANGE_COLLAPSE_SUB_MODULE": {
      const indexSubModule = action.payload[0];

      let arrSubModuleCollapse = state.subModuleCollapse.slice();
      arrSubModuleCollapse[indexSubModule] = !state.subModuleCollapse[
        indexSubModule
      ];
      return {
        subModuleCollapse: arrSubModuleCollapse,
      };
    }

    default:
      return state;
  }
}

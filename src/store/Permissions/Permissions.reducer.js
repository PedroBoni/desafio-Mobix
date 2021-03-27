const stateInit = () => {
  let arrPermissions = [];
  let arrAllPermissions = [];
  let arrSubModulesPermissions = [];
  for (let i = 0; i < 50; i++) {
    arrPermissions[i] = true;
    if (i < 5) arrAllPermissions[i] = true;
    if (i < 20) arrSubModulesPermissions[i] = true;
  }
  return {
    permissions: arrPermissions,
    allPermissions: arrAllPermissions,
    subModulesPermissions: arrSubModulesPermissions,
  };
};

const subModulesMinMax = [
  [0, 1],
  [2, 4],
  [5, 8],
  [9, 9],
];

export default function (state = stateInit(), action) {
  switch (action.type) {
    case "CHANGE_EVERYONE_CHECKBOX": {
      const indexColumn = action.payload[0];
      let i = (indexColumn + 1) * 10 - 10;
      let arrPermissions = state.permissions.slice();
      let arrAllPermissions = state.allPermissions.slice();
      let arrSubModulesPermissions = state.subModulesPermissions.slice();

      for (let j = i; j < i + 10; j++) {
        arrPermissions[j] = !state.allPermissions[indexColumn];
      }
      for (let j = 0; j < 4; j++) {
        arrSubModulesPermissions[4 * indexColumn + j] = !state.allPermissions[
          indexColumn
        ];
      }

      arrAllPermissions[indexColumn] = !state.allPermissions[indexColumn];

      return {
        permissions: arrPermissions,
        allPermissions: arrAllPermissions,
        subModulesPermissions: arrSubModulesPermissions,
      };
    }

    case "CHANGE_SUB_MODULE_CHECKBOX": {
      const indexColumn = action.payload[0];
      const indexSubModule = action.payload[1];

      let i = 4 * indexColumn;
      let arrSubModulesPermissions = state.subModulesPermissions.slice();
      let arrPermissions = state.permissions.slice();
      let arrAllPermissions = state.allPermissions.slice();

      arrSubModulesPermissions[i + indexSubModule] = !state
        .subModulesPermissions[i + indexSubModule];

      let columnBeginning = (indexColumn + 1) * 10 - 10;
      let min = columnBeginning + subModulesMinMax[indexSubModule][0];
      let max = columnBeginning + subModulesMinMax[indexSubModule][1];

      for (let j = min; j < max + 1; j++) {
        arrPermissions[j] = !state.subModulesPermissions[i + indexSubModule];
      }
      let AllPermissionsIstrue = true;
      let countFalsePermissions = 0;
      for (let j = i; j < i + 4; j++) {
        if (arrSubModulesPermissions[j] === false) {
          countFalsePermissions++;
        }
      }
      if (countFalsePermissions === 4) AllPermissionsIstrue = false;

      let countSubModulesPermissions = 0;
      for (let j = 0; j < 4; j++) {
        if (arrSubModulesPermissions[4 * indexColumn + j] === true)
          countSubModulesPermissions++;
      }
      if (countSubModulesPermissions !== 4) AllPermissionsIstrue = false;

      arrAllPermissions[indexColumn] = AllPermissionsIstrue;

      return {
        permissions: arrPermissions,
        allPermissions: arrAllPermissions,
        subModulesPermissions: arrSubModulesPermissions,
      };
    }

    case "CHANGE_CHECKBOX": {
      const indexColumn = action.payload[0];
      const indexCheckbox = action.payload[1];
      const indexSubModule = action.payload[2];

      let arrSubModulesPermissions = state.subModulesPermissions.slice();
      let arrPermissions = state.permissions.slice();
      let arrAllPermissions = state.allPermissions.slice();
      let columnBeginning = (indexColumn + 1) * 10 - 10;

      arrPermissions[indexCheckbox] = !state.permissions[indexCheckbox];

      let countFalsePermissions = 0;
      let countSubModulesPermissions = 0;
      let subModulesIsTrue = true;
      let min = columnBeginning + subModulesMinMax[indexSubModule][0];
      let max = columnBeginning + subModulesMinMax[indexSubModule][1];
      countFalsePermissions = 0;
      for (let i = min; i < max + 1; i++) {
        if (arrPermissions[i] === false) {
          countFalsePermissions++;
        }
      }
      if (countFalsePermissions === max + 1 - min) subModulesIsTrue = false;

      let subModuleGroup = 4 * indexColumn + indexSubModule;
      arrSubModulesPermissions[subModuleGroup] = subModulesIsTrue;

      let AllPermissionsIstrue = true;
      for (let i = columnBeginning; i < columnBeginning + 10; i++) {
        if (arrPermissions[i] === false) {
          countFalsePermissions++;
        }
      }
      if (countFalsePermissions === 10) AllPermissionsIstrue = false;

      for (let j = 0; j < 4; j++) {
        if (arrSubModulesPermissions[4 * indexColumn + j] === true)
          countSubModulesPermissions++;
      }
      if (countSubModulesPermissions !== 4) AllPermissionsIstrue = false;

      arrAllPermissions[indexColumn] = AllPermissionsIstrue;

      return {
        permissions: arrPermissions,
        allPermissions: arrAllPermissions,
        subModulesPermissions: arrSubModulesPermissions,
      };
    }

    default:
      return state;
  }
}

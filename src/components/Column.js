import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeEveryoneCheckbox,
  changeSubMuduleCheckbox,
  changeCheckbox,
} from "../store/Permissions/Permissions.actions";

export default function Column({ title, indexColumn }) {
  const dispatch = useDispatch();

  const permissionsCheckbox = useSelector(
    (state) => state.permissions.permissions
  );
  const allPermissions = useSelector(
    (state) => state.permissions.allPermissions
  );
  const subModulesPermissions = useSelector(
    (state) => state.permissions.subModulesPermissions
  );
  const subModuleCollapse = useSelector((state) => state.UI.subModuleCollapse);

  let indexCheckState = (indexColumn + 1) * 10 - 10;

  return (
    <div className="column datePlace">
      <div className="subModule">
        <p>{title}</p>
      </div>
      <div className="bg-darkGray">
        <input
          type="checkbox"
          className="checkbox"
          checked={allPermissions[indexColumn]}
          onChange={() => dispatch(changeEveryoneCheckbox(indexColumn))}
          data-cy={"allcheckbox-col" + indexColumn}
        />
      </div>
      <div className="bg-lightGray">
        <input
          type="checkbox"
          className="checkbox"
          checked={subModulesPermissions[4 * indexColumn]}
          onChange={() => dispatch(changeSubMuduleCheckbox(indexColumn, 0))}
          data-cy={"smcheckbox-sm1-col" + indexColumn}
        />
      </div>
      <div
        className={subModuleCollapse[0] ? "notCollapse SM1" : "collapse SM1"}
        data-cy={"groupCollapse-sm1"}
      >
        <div>
          <input
            type="checkbox"
            className="checkbox"
            checked={permissionsCheckbox[indexCheckState]}
            onChange={() =>
              dispatch(changeCheckbox(indexColumn, indexCheckState, 0))
            }
            data-cy={"checkbox-sm" + 1 + "-col" + indexColumn + "-i1"}
          />
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            checked={permissionsCheckbox[indexCheckState + 1]}
            data-cy={"checkbox-sm" + 1 + "-col" + indexColumn + "-i2"}
            onChange={() =>
              dispatch(changeCheckbox(indexColumn, indexCheckState + 1, 0))
            }
          />
        </div>
      </div>

      <div className="bg-lightGray">
        <input
          type="checkbox"
          className="checkbox"
          checked={subModulesPermissions[4 * indexColumn + 1]}
          onChange={() => dispatch(changeSubMuduleCheckbox(indexColumn, 1))}
          data-cy={"smcheckbox-sm2-col" + indexColumn}
        />
      </div>
      <div
        className={subModuleCollapse[1] ? "notCollapse SM2" : "collapse SM2"}
        data-cy={"groupCollapse-sm2"}
      >
        <div>
          <input
            type="checkbox"
            className="checkbox"
            checked={permissionsCheckbox[indexCheckState + 2]}
            data-cy={"checkbox-sm" + 2 + "-col" + indexColumn + "-i3"}
            onChange={() =>
              dispatch(changeCheckbox(indexColumn, indexCheckState + 2, 1))
            }
          />
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            checked={permissionsCheckbox[indexCheckState + 3]}
            data-cy={"checkbox-sm" + 2 + "-col" + indexColumn + "-i4"}
            onChange={() =>
              dispatch(changeCheckbox(indexColumn, indexCheckState + 3, 1))
            }
          />
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            checked={permissionsCheckbox[indexCheckState + 4]}
            data-cy={"checkbox-sm" + 2 + "-col" + indexColumn + "-i5"}
            onChange={() =>
              dispatch(changeCheckbox(indexColumn, indexCheckState + 4, 1))
            }
          />
        </div>
      </div>
      <div className="bg-lightGray">
        <input
          type="checkbox"
          className="checkbox"
          checked={subModulesPermissions[4 * indexColumn + 2]}
          onChange={() => dispatch(changeSubMuduleCheckbox(indexColumn, 2))}
          data-cy={"smcheckbox-sm3-col" + indexColumn}
        />
      </div>
      <div
        className={subModuleCollapse[2] ? "notCollapse SM3" : "collapse SM3"}
        data-cy={"groupCollapse-sm3"}
      >
        <div>
          <input
            type="checkbox"
            className="checkbox"
            checked={permissionsCheckbox[indexCheckState + 5]}
            data-cy={"checkbox-sm" + 3 + "-col" + indexColumn + "-i6"}
            onChange={() =>
              dispatch(changeCheckbox(indexColumn, indexCheckState + 5, 2))
            }
          />
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            checked={permissionsCheckbox[indexCheckState + 6]}
            data-cy={"checkbox-sm" + 3 + "-col" + indexColumn + "-i7"}
            onChange={() =>
              dispatch(changeCheckbox(indexColumn, indexCheckState + 6, 2))
            }
          />
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            checked={permissionsCheckbox[indexCheckState + 7]}
            data-cy={"checkbox-sm" + 3 + "-col" + indexColumn + "-i8"}
            onChange={() =>
              dispatch(changeCheckbox(indexColumn, indexCheckState + 7, 2))
            }
          />
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            checked={permissionsCheckbox[indexCheckState + 8]}
            data-cy={"checkbox-sm" + 3 + "-col" + indexColumn + "-i9"}
            onChange={() =>
              dispatch(changeCheckbox(indexColumn, indexCheckState + 8, 2))
            }
          />
        </div>
      </div>
      <div className="bg-lightGray">
        <input
          type="checkbox"
          className="checkbox"
          checked={subModulesPermissions[4 * indexColumn + 3]}
          onChange={() => dispatch(changeSubMuduleCheckbox(indexColumn, 3))}
          data-cy={"smcheckbox-sm4-col" + indexColumn}
        />
      </div>
      <div
        className={subModuleCollapse[3] ? "notCollapse SM4" : "collapse SM4"}
        data-cy={"groupCollapse-sm4"}
      >
        <div>
          <input
            type="checkbox"
            className="checkbox"
            checked={permissionsCheckbox[indexCheckState + 9]}
            data-cy={"checkbox-sm" + 4 + "-col" + indexColumn + "-i10"}
            onChange={() =>
              dispatch(changeCheckbox(indexColumn, indexCheckState + 9, 3))
            }
          />
        </div>
      </div>
    </div>
  );
}

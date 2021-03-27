import { createStore, combineReducers } from "redux";
import permissionsReducer from "./Permissions/Permissions.reducer";
import UIReducer from "./UI/UI.reducer";

const rootReducer = combineReducers({
  permissions: permissionsReducer,
  UI: UIReducer,
});

const store = createStore(rootReducer);

export default store;

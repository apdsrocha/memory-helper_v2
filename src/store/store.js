import { createStore } from "redux";
import { reducer } from "./reducers/reducer";
import { loadState } from "../services/localStorage";

const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

export default store;

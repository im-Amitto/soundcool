import { combineReducers } from "redux";
import blocks from "./blocks";
import projectControl from "./projectControl";

export default combineReducers({
  blocks,
  projectControl
});

import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/reducer";
import moduleReducer from "./Courses/[cid]/Modules/reducer";
const store = configureStore({
  reducer: { coursesReducer, moduleReducer },
});
export default store;

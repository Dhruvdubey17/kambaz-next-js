// import { configureStore } from "@reduxjs/toolkit";
// import coursesReducer from "./Courses/reducer";
// import moduleReducer from "./Courses/[cid]/Modules/reducer";
// const store = configureStore({
//   reducer: { coursesReducer, moduleReducer },
// });
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/reducer";
import moduleReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import enrollmentsReducer from "./Dashboard/enrollmentsReducer";

export const store = configureStore({
  reducer: {
    accountReducer,
    moduleReducer,
    coursesReducer,
    assignmentsReducer,
    enrollmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

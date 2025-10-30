"use client";

import { Provider } from "react-redux";
import store from "../store"; // adjust path to your store
import TodoList from "./todos/TodoList";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";

export default function ReduxExamples() {
  return (
    <Provider store={store}>
      <div id="wd-redux-examples">
        <h2>Redux Examples</h2>
        <hr />

        <h3>Counter Example</h3>
        <CounterRedux />
        <hr />

        <h3>Add Example</h3>
        <AddRedux />
        <hr />

        <h3>Todo List Example</h3>
        <TodoList />
        <hr />
      </div>
    </Provider>
  );
}

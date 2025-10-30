"use client";
import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariables from "./DateStateVariables";
import ObjectStateVariables from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples/page";
import store from "./store";
import { Provider } from "react-redux";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <Provider store={store}>
      <div id="wd-passing-functions">
        <h2>Lab 4</h2>
        ...
        <PassingFunctions theFunction={sayHello} />
        <ClickEvent />
        <PassingDataOnEvent />
        <EventObject />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariables />
        <ObjectStateVariables />
        <ArrayStateVariable />
        <ParentStateComponent />
        <ReduxExamples />
      </div>
    </Provider>
  );
}

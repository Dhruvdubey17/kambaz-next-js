"use client";

import { useSelector } from "react-redux";
import type { LabsRootState } from "../store";

export default function HelloRedux() {
  const { message } = useSelector((state: LabsRootState) => state.helloReducer);

  return (
    <div id="wd-hello-redux">
      <h2>Hello Redux</h2>
      <h3>{message}</h3>
      <hr />
    </div>
  );
}

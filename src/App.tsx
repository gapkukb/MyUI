import React from "react";
import { Progress } from "./package/progress";

function App() {
  return (
    <>
      <Progress value="50" bgcolor="red"></Progress>
      <Progress value="50" type="circle"></Progress>
    </>
  );
}

export default App;

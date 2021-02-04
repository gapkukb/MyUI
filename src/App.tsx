import React from "react";
import "./App.css";
import "./util/naming-style";
import { overview } from "./util/performance";
import { Button } from "./package/button";
overview();
function App() {
  return (
    <div>
      <Button label="ABC" type="danger" size="normal" style={{ height: "100px" }}></Button>
      <Button href="" label="ABC" type="danger" size="normal" style={{ height: "100px" }}></Button>
      <Button label="ABC" type="danger" size="normal" style={{ height: "100px" }}></Button>
      <input type="search" name="ABC" value="abc" id="" />
      <select name="" id="" disabled>
        <option value="123">abc</option>
        <option value="123">abc</option>
        <option value="123" selected>
          abc
        </option>
      </select>
    </div>
  );
}

export default App;

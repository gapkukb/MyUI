import React from "react";
import "./App.css";
import "./util/naming-style";
import { overview } from "./util/performance";
import { Button } from "./package/button";
overview();
function App() {
  return <Button label="ABC" type="danger" size="normal"></Button>;
}

export default App;

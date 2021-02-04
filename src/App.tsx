import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import "./util/naming-style";
import { overview } from "./util/performance";
import { Button } from "./package/button";
overview();
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Button label="ABC" type="danger" size="normal"></Button>
        <Link to="/13">Home</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import Grid from "./package/box/grid";
import Cell from "./package/box/cell";

function App() {
  return (
    <>
      <Grid className="grid--4" gap="sm" padding="lg">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Cell key={i} className="item1">
              1
            </Cell>
          ))}
      </Grid>
      <Grid gap={["lg", "xs"]} padding={["lg", "xs"]}>
        {Array(80)
          .fill(0)
          .map((_, i) => (
            <Cell key={i} className="item1">
              1
            </Cell>
          ))}
      </Grid>
    </>
  );
}

export default App;

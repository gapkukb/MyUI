import React from "react";
import Grid from "./package/box/grid";
import Cell from "./package/box/cell";

function App() {
  return (
    <>
      <Grid cols="24" gap={{ xs: "xs", sm: "sm", md: "md", lg: "lg-lg", xl: "xl" }} padding="lg">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <Cell
              key={i}
              // span={{ xs: 13, sm: 12, md: 8, lg: 6, xl: 4 }}
            >
              {i}
            </Cell>
          ))}
      </Grid>
      <Grid cols="24" gap="xs" padding="lg">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <Cell
              key={i}
              // span={{ xs: 13, sm: 12, md: 8, lg: 6, xl: 4 }}
            >
              {i}
            </Cell>
          ))}
      </Grid>
      <Grid cols="24" gap="xs-sm" padding="lg" className="only--md">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <Cell
              key={i}
              // span={{ xs: 13, sm: 12, md: 8, lg: 6, xl: 4 }}
            >
              {i}
              {i}
            </Cell>
          ))}
      </Grid>
      <div className="px--lg pr--xs">sdfsfd</div>
      <div className="show--xl">show--xl</div>
      <div className="show--but-xl">show--but-xl</div>
    </>
  );
}

export default App;

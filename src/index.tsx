import * as React from "react";
import { render } from "react-dom";
import { Grid } from "./comps/Grid";
import "./App.css";

const styles = {
  fontFamily: "sans-serif"
  // textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Grid data={{ nofRows: 20, nofCols: 20, fillRatio: 0.25 }} />
  </div>
);

render(<App />, document.getElementById("root"));

import * as React from "react";

import { IStrip } from "../../interfaces/IStrip";
import Strip from "../Strip/Strip";
import "./App.css";

const strip: IStrip = {
  width: 300,
  height: 400,
  chunks: [
    {
      x: 0,
      y: 0,
      width: 200,
      height: 200
    }
  ]
};

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Strip strip={strip} />
      </div>
    );
  }
}

export default App;

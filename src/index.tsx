import React from "react";
import { render } from "react-dom";
import { App } from "~containers/App";

const $app = document.getElementById("root")!;
function renderApp() {
  render(<App />, $app);
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}

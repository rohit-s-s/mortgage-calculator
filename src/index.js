import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Theme from "./theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Theme />
  </StrictMode>
);

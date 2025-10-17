import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import Main from "./page/main";
import { InfoProvider } from "./context/Info";
import { BrowserRouter } from "react-router-dom";
const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <InfoProvider>
        <Main />
      </InfoProvider>
    </BrowserRouter>
  </StrictMode>
);

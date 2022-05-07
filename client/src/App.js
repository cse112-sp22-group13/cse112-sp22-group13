import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import NavBar from "./components/NavBar";
import Main from "./containers/Main";

const App = (props) => (
    <BrowserRouter>
      <ScrollToTop>
        <div>
          <NavBar />
          <Main />
        </div>
      </ScrollToTop>
    </BrowserRouter>
);

export default App;

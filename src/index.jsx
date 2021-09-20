import React from "react";
import ReactDOM from "react-dom";
import App from "./Pages/App/App";
import { BrowserRouter } from "react-router-dom"
import ItemState from "./Context/Items/ItemState"

ReactDOM.render(   
      <ItemState>
            <BrowserRouter injectFirst>
                  <App />
            </BrowserRouter>
      </ItemState>, 
      document.querySelector("#root")
);

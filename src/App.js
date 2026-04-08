import React from "react";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import AppRoutes from "./routes";

function App(){
  return (
    <StyledEngineProvider injectFirst>
      
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
     
     
    </StyledEngineProvider>
  );
}
export default App;

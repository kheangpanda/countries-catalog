import React from "react";
import { Button } from "@mui/material";
import ListCountries from "./components/CountryGrid";
function App() {
  return (
    <div className="App">
      <h1>Country Categories</h1>
      <ListCountries />
    </div>
  );
}

export default App;

import React from "react";
import { Button } from "@mui/material";
import ListCountries from "./components/CountryGrid";
import PrimarySearchAppBar from "./components/Header";
function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <ListCountries />
    </div>
  );
}

export default App;

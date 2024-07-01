import React, { useEffect } from "react";
import AppLayout from "./components/Layout";

function App() {
  useEffect(() => {
    document.title = "Country Catalogs";
  }, []);
  return (
    <div className="App">
      <AppLayout />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      {/* inside Components i can define props related to state */}
      <div className="App-header">
        <Header />
      </div>
    </div>
  );
}

export default App;

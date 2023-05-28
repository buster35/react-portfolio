import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      {/* inside Components i can define props related to state */}
      <div className="App-header">
        <Header />
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default App;

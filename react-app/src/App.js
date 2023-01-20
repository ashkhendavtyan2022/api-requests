import React from "react";
import "./App.css";
import { Header } from "./Layout/Header";
import { Sidebar } from "./Layout/Sidebar";
import { RouteComponent } from "./Routes";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Header />
        <RouteComponent />
      </div>
    </div>
  );
}

export default App;
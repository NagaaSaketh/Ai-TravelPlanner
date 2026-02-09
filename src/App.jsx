import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Travel from "./components/Travel";

function App() {
  return (
    <>
      <Header />
      <Travel />
    </>
  );
}

export default App;

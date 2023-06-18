import logo from "./logo.svg";
import "./App.css";
import { FaBeer } from "react-icons/fa";
import { BiAlignMiddle } from "react-icons/bi";
import { CiAirportSign1 } from "react-icons/ci";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Icons</h1>
      <FaBeer fontSize={32} />
      <BiAlignMiddle fontSize={32} />
      <CiAirportSign1 fontSize={32} />
    </div>
  );
}

export default App;

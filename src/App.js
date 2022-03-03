import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashEmployee from "./components/Dashemployee";
import Applyleave from "./components/Applyleave";
import Employees from "./components/Employees";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/dashboard" element={<DashEmployee />}></Route>

          <Route path="register" element={<Register/>}></Route>
          <Route path="/applyleave" element={<Applyleave/>}></Route>
     <Route path="/employees" element={<Employees/>}></Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;

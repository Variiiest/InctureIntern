import Login from "./components/employee/Login";
import Register from "./components/employee/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applyleave from "./components/employee/Applyleave";
import DashHR from "./components/hr/DashHR";
import Leavestatus from "./components/employee/Leavestatus";
import LoginHr from "./components/hr/LoginHr";
import LoginAdmin from "./components/admin/LoginAdmin";
import DashAdmin from "./components/admin/DashAdmin";
import Dashboard from "./components/employee/Dashboard";

const user= localStorage.getItem('user')

console.log(user)

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes><Route exact path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>

          <Route path="/loginhr" element={<LoginHr/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/loginadmin" element={<LoginAdmin/>}></Route>
          <Route path="/dashhr" element={<DashHR/>}></Route>
          <Route path="/dashboardadmin" element={<DashAdmin/>}></Route>



          <Route path="/applyleave" element={<Applyleave/>}></Route>
          <Route path="/leavestatus" element={<Leavestatus/>}></Route>

          
        </Routes>
      </BrowserRouter>
  
      ,
    </div>
  );
}

export default App;

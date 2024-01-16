import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import AddProject from "./Pages/AddProject";
import CreateAccount from "./Pages/CreateAccount";
import AddTask from "./Pages/AddTask";
import VendorForm from "./Pages/VendorForm";
import FindProject from "./Pages/FindProject";
import CreateAccountTwo from "./Pages/CreateAccountTwo";
import AllDetails from "./Pages/AllDetails";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/createAccounttwo" element={<CreateAccountTwo />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/vendorform" element={<VendorForm />} />
        <Route path="/findproject" element={<FindProject />} />
        <Route path="/alldetails" element={<AllDetails />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

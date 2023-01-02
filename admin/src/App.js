import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/admin/Header";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register";
import CreateSiswa from "./components/admin/CreateSiswa";
import EditSiswa from "./components/admin/EditSiswa";
import AbsenSiswa from "./components/admin/AbsenSiswa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={[ <Header/> , <Dashboard/>]} />
          <Route path="/createsiswa" element={[<Header/>,<CreateSiswa />]} />
          <Route path="/editsiswa/:id" element={[<Header/>,<EditSiswa />]} />
          <Route path="/absen" element={[<Header/>,<AbsenSiswa />]} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

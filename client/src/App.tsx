//import//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Clients } from "./pages/Clients";
import { Expenses } from "./pages/Expenses";
import { Workday } from "./pages/Workday";
import { Labor } from "./pages/Labor";
import { SingleClient } from "./pages/SingleClient";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/clients" element={<Clients />}/>
        <Route path="/clients/:id" element={<SingleClient />}/>
        <Route path="/expenses" element={<Expenses />}/>
        <Route path="/workday" element={<Workday />}/>
        <Route path="/labor" element={<Labor />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

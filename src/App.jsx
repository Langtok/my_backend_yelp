import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import BusinessPage from "./pages/BusinessPage.jsx";
import BusinessList from "./components/BusinessList.jsx";
import AddBusiness from "./components/AddBusiness.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BusinessList />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/business/:id" element={<BusinessPage />} />
        <Route path="/add-business" element={<AddBusiness />} />
      </Routes>
    </Router>
  );
}

export default App;

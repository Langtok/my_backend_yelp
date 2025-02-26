import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AuthPage from "./pages/Auth";
import BusinessList from "./components/BusinessList";
import BusinessPage from "./pages/BusinessPage";
import AddBusiness from "./components/AddBusiness";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BusinessList />} />
        <Route path="/auth" element={<AuthPage setUser={setUser} />} />
        <Route path="/business/:id" element={<BusinessPage user={user} />} />
        <Route path="/add-business" element={user ? <AddBusiness user={user} /> : <p>Sign in to add business</p>} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { PrivateRoutes } from "./components/PrivateRoutes";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage />} path="/" />
          </Route>
          <Route element={<LoginPage />} path="/login" />
        </Routes>
      </Router>
    </>
  );
}

export default App;

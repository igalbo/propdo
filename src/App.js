import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RealEstate from "./pages/RealEstate";
import Map from "./pages/Map";
import ErrorPage from "./pages/ErrorPage";
import { ViewProvider } from "./ViewContext";

function App() {
  return (
    <ViewProvider>
      <Router>
        <nav>
          <Link to="/real-estate">Real Estate</Link>
          <Link to="/map">Map</Link>
        </nav>
        <Routes>
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <div>Footer</div>
      </Router>
    </ViewProvider>
  );
}

export default App;

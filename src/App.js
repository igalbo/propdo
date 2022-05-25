import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ViewProvider } from "./ViewContext";
import RealEstate from "./pages/RealEstate";
import Map from "./pages/Map";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <ViewProvider>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <div>Footer</div>
      </Router>
    </ViewProvider>
  );
}

export default App;

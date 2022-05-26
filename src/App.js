import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ViewProvider } from "./ViewContext";
import RealEstate from "./pages/RealEstate";
import Map from "./pages/Map";
import NavBar from "./components/NavBar/NavBar";
import propdoLogo from "./assets/propdo-logo-white.png";
import mapboxgl from "mapbox-gl";
import "./App.css";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


function App() {
  return (
    <ViewProvider>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>

            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<Navigate to="/real-estate" />} />
          </Routes>
        </div>
        <footer>
          Made by Igal Bogopolsky <a href="https://igal.co">igal.co</a> for
          Propdo&nbsp;
          <img src={propdoLogo} alt="footer-logo" height={24} />
        </footer>
      </Router>
    </ViewProvider>
  );
}

export default App;

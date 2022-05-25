import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ViewProvider } from "./ViewContext";
import RealEstate from "./pages/RealEstate";
import Map from "./pages/Map";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <ViewProvider>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <div>Footer</div>
      </Router>
    </ViewProvider>
  );
}

export default App;

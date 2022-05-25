import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const REACT_APP_MAPBOX_TOKEN =
  "pk.eyJ1IjoiaWdhbGIiLCJhIjoiY2wzbHk2bnRnMDFwajNrcWZpcWFheTlnbyJ9.oEZhexetAjQtXXWRTEXdRg";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.1111,
    longtitude: -75.1111,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  return (
    <div className="map-page">
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL>
    </div>
  );
};

export default Map;

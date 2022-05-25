import { Button } from "@mui/material";
import { useRef, useState } from "react";
import { Map as MapView } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiaWdhbGIiLCJhIjoiY2wzbHk2bnRnMDFwajNrcWZpcWFheTlnbyJ9.oEZhexetAjQtXXWRTEXdRg";

export default function Map() {
  const mapRef = useRef(null);
  const formRef = useRef();
  const [viewport, setViewport] = useState({
    latitude: 31.0461,
    longitude: 34.8516,
    zoom: 7,
  });
  const [gpsValue, setGpsValue] = useState([]);

  const handleClick = (event) => {
    setGpsValue([event.lngLat.lat, event.lngLat.lng]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formRef);
  };

  return (
    <div style={{ height: "70vh" }}>
      <div className="coordinates-box">
        <form onSubmit={handleSubmit} ref={formRef}>
          <input type="text" value={gpsValue[0]} />
          <input type="text" />

          <Button type="submit">Submit</Button>
        </form>
      </div>
      <MapView
        style={{ height: "90%" }}
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        onClick={handleClick}
        // ref={mapRef}
      ></MapView>
    </div>
  );
}

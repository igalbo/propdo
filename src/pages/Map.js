import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { Map as MapView } from "react-map-gl";


const MAPBOX_TOKEN =
    "pk.eyJ1IjoiaWdhbGIiLCJhIjoiY2wzbHk2bnRnMDFwajNrcWZpcWFheTlnbyJ9.oEZhexetAjQtXXWRTEXdRg";

export default function Map() {
    const formRef = useRef();
    const [viewport, setViewport] = useState({

        latitude: 31.0461,
        longitude: 34.8516,
        zoom: 7,

    });
    const [gpsLat, setGpsLat] = useState("");
    const [gpsLng, setGpsLng] = useState("");

    const handleClick = (event) => {
        setGpsLat(event.lngLat.lat.toFixed(4))
        setGpsLng(event.lngLat.lng.toFixed(4))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setViewport({ latitude: formRef.current[0].value, longitude: formRef.current[2].value, zoom: 7 });
    };

    return (
        <div style={{ height: "1000px" }}>
            <div className="coordinates-box" style={{
                margin: "10px"
            }}>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <TextField id="lat" label="Latitude" type="text" value={gpsLat} onChange={(e) => setGpsLat(Number(e.target.value).toFixed(4))} />
                    <TextField id="lng" label="Longitude" type="text" value={gpsLng} onChange={(e) => setGpsLng(Number(e.target.value).toFixed(4))} />
                    <Button style={{ padding: "15px" }} type="submit" variant="contained">Submit</Button>
                </form>
            </div>
            <MapView

                style={{ height: "80%" }}
                {...viewport}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxAccessToken={MAPBOX_TOKEN}
                onClick={handleClick}
                onMove={(newViewport) => setViewport(newViewport)}
            // ref={mapRef}
            ></MapView>
        </div>
    );
}

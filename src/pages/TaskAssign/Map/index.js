import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import React from 'react'
import LeafletRoutingMachine from "./LeafletRoutingMachine";
import "./App.css"

function MapBox() {
  const center = [10.88080081926999, 106.80540775458243]

  return(
    <div className='App'>
       <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletRoutingMachine/>
      </MapContainer>
    </div>
  )
}
let DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default MapBox
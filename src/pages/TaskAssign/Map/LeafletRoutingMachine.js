import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
const MCP_local = [
  [10.775911446842391, 106.66257956965325],
  [10.807082147705916, 106.71306272574583],
  [10.84809682007281, 106.79117422574618]];
const LeafletRoutingMachine = () => {
  const map = useMap();
  useEffect(() =>{
    L.Routing.control({
      waypoints: [
        L.latLng(10.880758675454759, 106.80538629714444),
        L.latLng(MCP_local[2][0], MCP_local[2][1])
      ]
    }).addTo(map);
  },[])
  return null;
}

export default LeafletRoutingMachine
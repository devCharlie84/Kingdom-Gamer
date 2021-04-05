import React, { useState, useEffect } from "react";
import { getEnlaceApi } from "../../../api/enlace";
import EnlaceList from "../../../components/Admin/Enlace/EnlaceList";

export default function Enlace() {
  const [enlace, setEnlace] = useState([]);
  const [reloadEnlace, setReloadEnlace] = useState(false);

  useEffect(() => {
    getEnlaceApi().then((response) => {
      setEnlace(response.enlace);
    });
    setReloadEnlace(false);
  }, [reloadEnlace]);

  return (
    <div className="enlace">
      <EnlaceList enlace={enlace} setReloadEnlace={setReloadEnlace} />
    </div>
  );
}

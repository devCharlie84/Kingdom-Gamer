import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title> Secciones | Kindom Gamer</title>
        <meta
          name="description"
          content="Secciones | Kingdom Gamer"
          data-react-helmet="true"
        />
      </Helmet>
      <div className="enlace">
        <EnlaceList enlace={enlace} setReloadEnlace={setReloadEnlace} />
      </div>
    </>
  );
}

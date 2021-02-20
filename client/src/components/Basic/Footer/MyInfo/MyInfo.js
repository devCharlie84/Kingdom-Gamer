import React from "react";
import Logo from "../../../../assets/img/png/logo-kg.png";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={Logo} alt="Kingdom Gamer" />
      <h4>Sé parte de nuestro Kingdom. Te esperamos Gamer!</h4>
    </div>
  );
}

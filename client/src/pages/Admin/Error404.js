import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../../assets/img/png/404_image.png";

export default function Error404() {
  return (
    <>
      <Helmet>
        <title> Error 404 - Not Found</title>
      </Helmet>
      <div>
        <img style={{ width: "100%" }} src={Logo} alt="Error 404" />
      </div>
    </>
  );
}

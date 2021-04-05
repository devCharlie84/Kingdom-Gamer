import React, { useState, useEffect } from "react";
import Menu from "antd/lib/menu";
import { Link } from "react-router-dom";
import { getEnlaceApi } from "../../../api/enlace";
import Logo from "../../../assets/img/png/logo-kg.png";

import "./MenuTop.scss";

export default function MenuTop() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    getEnlaceApi().then((response) => {
      const arrayMenu = [];
      response.enlace.forEach((element) => {
        if (element.active) {
          arrayMenu.push(element);
        }
      });
      setMenuData(arrayMenu);
    });
  }, []);

  return (
    <Menu className="menu-top-web" mode="horizontal">
      <Menu.Item className="menu-top-web__logo">
        <Link to={"/"}>
          <img src={Logo} alt="Kingdom Gamer" />
        </Link>
      </Menu.Item>
      {menuData.map((element) => {
        const external = element.url.indexOf("http") > -1 ? true : false;

        if (external) {
          return (
            <Menu.Item key={element._id} className="menu-top-web__item">
              <a href={element.url} target="_blank" rel="noreferrer">
                {element.title}
              </a>
            </Menu.Item>
          );
        } else {
          return (
            <Menu.Item key={element._id} className="menu-top-web__item">
              <Link to={element.url}>{element.title}</Link>
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
}

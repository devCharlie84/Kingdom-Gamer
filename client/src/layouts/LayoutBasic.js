import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "antd/lib/layout";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      {/* TO DO: Menu Slider */}
      <Layout className="layout-basic">
        <Header className="layout-basic">{/* TO DO: Menu Top */}</Header>
        <Content className="layout-basic">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-basic">Carlos Andrés Morales Lara</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

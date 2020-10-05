import React from "react";
import { UIView, UISref } from "@uirouter/react";
import "./App.css";

//Ant Desing v4
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
const { Header, Content, Footer } = Layout;

const Contenedor = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <UISref to="contenedor.home">
              <a href="#!">Inicio</a>
            </UISref>
          </Menu.Item>
          <Menu.Item key="2">Cerrar Sesión</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", margin: "16px 0" }}>
        <div className="site-layout-content">
          <UIView />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©2020 Created by William Guzman
      </Footer>
    </Layout>
  );
};

export default Contenedor;

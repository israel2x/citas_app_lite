import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./citaslayout.css";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  let navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const onClickHandler = (e) => {
    if (e.key === "1") {
      console.log(e.key === "1");
      navigate("citas");
    } else if (e.key === "2") {
      console.log(e.key === "2");
      navigate("pacientes");
    } else if (e.key === "3") {
      console.log(e.key === "3");
      navigate("recetas");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"></div>
        <Menu
          theme="dark"
          onClick={onClickHandler}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Citas",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Pacientes",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Recetas",
            },
          ]}
        ></Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

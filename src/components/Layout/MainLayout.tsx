import { ConfigProvider, Layout } from "antd";
import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "../UI/DashboardHeader";
import { Outlet } from "react-router-dom";
import { mainTheme } from "../../theme";


const { Content } = Layout;

const MainLayout = () => {
  return (
    <ConfigProvider
      theme={mainTheme}
    >
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout className="overflow-y-scroll">
          <DashboardHeader />
          <Content className="m-4 ">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;

/*

<Search
      addonBefore="https://"
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{ width: 304 }}
    />

    */

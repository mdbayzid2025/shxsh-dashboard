import { ConfigProvider, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { mainTheme } from "../../theme";
import DashboardHeader from "../UI/DashboardHeader";
import Sidebar from "./Sidebar";


const { Content } = Layout;

const MainLayout = () => {
  return (
    <ConfigProvider
      theme={mainTheme}
    >
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout style={{backgroundColor: "#000804"}}  className="overflow-y-scroll">
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

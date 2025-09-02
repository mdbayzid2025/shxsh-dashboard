import { Button, ConfigProvider, Layout, Menu } from "antd";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sidebarItems } from "../../utils/sidebarItems";

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const generateSidebarItems = (items: any) => {
    return items?.map((item: any) => {
      if (item?.children) {
        return {
          key: item?.key,
          icon: item?.icon,
          label: item?.label,
          children: item?.children?.map((child: any) => ({
            key: `/${child?.path}`,
            icon: child?.icon,
            label: <Link to={`/${child?.path}`}>{child?.label}</Link>,
          })),
        };
      }
      return {
        key: `/${item?.key}`,
        icon: item?.icon,
        label: <Link to={`/${item?.path}`}>{item?.label}</Link>,
      };
    });
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#043623" },
        components: {
          Menu: {
            itemSelectedBg: "#043623",
            itemSelectedColor: "#ffffff",
            itemColor: "#ffffff",
            itemActiveBg: "rgba(2, 115, 72, 0.4)",
            itemHoverBg: "rgba(2, 115, 72, 0.4)",
            itemHoverColor: "#ffffff",
            itemBorderRadius: 8,
            itemHeight: 45,
            itemMarginBlock: 6,             
          },
          Layout: {
            siderBg: "linear-gradient(91.95deg, rgba(2, 115, 72, 0.4) -120.37%, rgb(1, 27, 17) 70.16%)"
          }
        },
      }}
    >
      <div className="contentBg">
      <Sider
        width={250}
        breakpoint="md"
        collapsedWidth="0"             
      >
        {/* Logo */}
        <div className="w-full h-[100px] flex items-center justify-center">
          <img
            src="/logo.png"
            className="w-24 object-cover overflow-visible"
            alt="Logo"
          />
        </div>

        {/* Menu + Logout */}
        <div
          className="flex flex-col "
          style={{ height: "calc(100vh - 100px)" }}
        >
          <Menu
            mode="inline"
            selectedKeys={[location?.pathname]}
            items={generateSidebarItems(sidebarItems)}
            style={{
              flexGrow: 1,
              overflowY: "auto",
              background: "transparent", // keep gradient visible              
            }}
            className="custom-sidebar-menu"
          />

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            size="large"
            style={{
              borderRadius: 8,
              paddingLeft: 30,
              minHeight: 45,
              marginTop: "auto",
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              border: "none",
            }}
            className="!flex !justify-start items-center gap-2"
            icon={<FiLogOut size={20} />}
          >
            LogOut
          </Button>
        </div>
      </Sider>
      </div>
    </ConfigProvider>
  );
};

export default Sidebar;

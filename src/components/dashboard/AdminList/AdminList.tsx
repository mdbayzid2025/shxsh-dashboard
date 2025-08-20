import {
  EyeOutlined,
  StopOutlined
} from "@ant-design/icons";
import { Space, Table, Tooltip } from "antd";

const AdminList = () => {
   
  const columns = [
    {
      title: "SL No",
      dataIndex: "slNo",
      key: "slNo",
      render: (_ :any, __ :any, index :any) => index + 1,
      width: 80,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
      key: "joinDate",
    },
    
    {
      title: "Action",
      key: "action",
      width: 130,
      render: (_: any, record: any) => (
        <Space size="middle">
          <Tooltip title="View">
            <EyeOutlined
              size={20}
              style={{ color: "#1890ff", cursor: "pointer" }}
              onClick={() => {                
              }}
            />
          </Tooltip>
          <Tooltip title="Banned">
            <StopOutlined
              size={20}
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => console.log("Banned:", record)}
            />
          </Tooltip>          
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 h-full">
      <div className="flex items-center justify-between mb-6 ">
        <h1 className="text-2xl text-primary font-semibold">Admin Management</h1>

      </div>
     
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        pagination={{ pageSize: 10 }}
      />      
    </div>
  );
};

export default AdminList;


const dataSource = [
  {
    key: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    contact: "+1 555-123-4567",
    address: "123 Main St, New York, USA",
    status: "Active",
    role: "Admin",
    playlist: 12,
    type: "Artist",
    joinDate: "2024-01-15",
  },
  {
    key: 2,
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    contact: "+1 555-234-5678",
    address: "456 Oak St, Los Angeles, USA",
    status: "Banned",
    role: "Admin",
    playlist: 5,
    type: "Listener",
    joinDate: "2023-11-22",
  },
  {
    key: 3,
    name: "Liam Brown",
    email: "liam.brown@example.com",
    contact: "+1 555-345-6789",
    address: "789 Pine St, Chicago, USA",
    status: "Active",
    role: "Super Admin",
    playlist: 20,
    type: "Producer",
    joinDate: "2024-03-09",
  },
  {
    key: 4,
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
    contact: "+1 555-456-7890",
    address: "321 Maple St, Houston, USA",
    status: "Active",
    role: "Admin",
    playlist: 8,
    type: "Artist",
    joinDate: "2024-05-01",
  },
  {
    key: 5,
    name: "Noah Wilson",
    email: "noah.wilson@example.com",
    contact: "+1 555-567-8901",
    address: "654 Birch St, Phoenix, USA",
    status: "Banned",
    role: "Admin",
    playlist: 14,
    type: "Listener",
    joinDate: "2023-12-17",
  },  
];


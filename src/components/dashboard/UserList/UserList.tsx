import {
  EyeOutlined,
  SearchOutlined,
  StopOutlined
} from "@ant-design/icons";
import { Button, Divider, Form, Input, Modal, Space, Table, Tooltip } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { TbMessageDots } from "react-icons/tb";

const UserList = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [openWarning, setOpenWarning] = useState(false);

  const [openUserDetails, setOpenUserDetails] = useState(false);
  
  const columns = [
    {
      title: "SL No",
      dataIndex: "slNo",
      key: "slNo",
      render: (text :any, record :any, index :any) => index + 1,
      width: 80,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Playlist",
      dataIndex: "playlist",
      key: "playlist",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
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
                setOpenUserDetails(true);
                setSelectedUser(record);
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
          <Tooltip title="Edit">
            <TbMessageDots
              size={20}
              style={{ color: "orange", cursor: "pointer" }}
              onClick={() => {
                setSelectedUser(record);
                setOpenWarning(true);
              }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 h-full">
      <div className="flex items-center justify-between mb-6 ">
        <h1 className="text-2xl text-primary font-semibold">User Management</h1>
        <Form>
          <div className="flex items-center">
            <Input
              id="search"
              placeholder="Search"
              style={{                                
                height: 48,
                color: "#808080",
              }}
              className="!rounded-r-none md:!w-[350px]"
            />
            <Button
              size="large"
              icon={<SearchOutlined />}              
              target="_blank"
              className="!bg-white !w-[50px] !h-[48px] !rounded-none !rounded-r-md"
            />
          </div>
        </Form>
      </div>
      <WarningModal
        open={openWarning}
        setOpen={setOpenWarning}
        onSubmit={(reason) => console.log("Warning reason:", reason)}
      />
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        pagination={{ pageSize: 10 }}
      />      
    </div>
  );
};

export default UserList;

interface WarningModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (reason: string) => void;
}

const WarningModal = ({ open, setOpen, onSubmit }: WarningModalProps) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    form.resetFields();
    setOpen(false);
  };

  const handleFinish = async (values: { reason: string }) => {
    setLoading(true);
    try {
      await onSubmit(values.reason);
      form.resetFields();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={<p className="text-2xl pt-2.5 pb-1 leading-0 font-semibold text-primary">Warning</p>}
      
      open={open}
      onCancel={handleClose}
      footer={false}
      centered
    >
      <Divider />
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        style={{ marginTop: 10 }}
      >
        <FormItem
          label={
            <p className="text-gray font-semibold text-lg mb-5 ">
              Warning Message
            </p>
          }
          name="reason"
          rules={[{ required: true, message: "Please enter warning reason" }]}
        >
          <Input
            placeholder="Enter warning reason"  style={{height: 48}}          
          />
        </FormItem>

        <div className="flex justify-center">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            style={{ width: "100%", background: "#8B4E2E", marginTop: 30 }}
            loading={loading}
          >
            Send Warning
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

const dataSource = [
  {
    key: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    contact: "+1 555-123-4567",
    address: "123 Main St, New York, USA",
    status: "Active",
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
    playlist: 14,
    type: "Listener",
    joinDate: "2023-12-17",
  },
  {
    key: 6,
    name: "Ava Martinez",
    email: "ava.martinez@example.com",
    contact: "+1 555-678-9012",
    address: "987 Cedar St, Philadelphia, USA",
    status: "Active",
    playlist: 6,
    type: "Artist",
    joinDate: "2024-07-20",
  },
  {
    key: 7,
    name: "Ethan Anderson",
    email: "ethan.anderson@example.com",
    contact: "+1 555-789-0123",
    address: "159 Walnut St, San Antonio, USA",
    status: "Banned",
    playlist: 9,
    type: "Producer",
    joinDate: "2023-09-05",
  },
  {
    key: 8,
    name: "Sophia Thomas",
    email: "sophia.thomas@example.com",
    contact: "+1 555-890-1234",
    address: "753 Spruce St, San Diego, USA",
    status: "Active",
    playlist: 18,
    type: "Listener",
    joinDate: "2024-02-12",
  },
  {
    key: 9,
    name: "Mason Taylor",
    email: "mason.taylor@example.com",
    contact: "+1 555-901-2345",
    address: "852 Poplar St, Dallas, USA",
    status: "Active",
    playlist: 11,
    type: "Artist",
    joinDate: "2024-04-28",
  },
  {
    key: 10,
    name: "Isabella Moore",
    email: "isabella.moore@example.com",
    contact: "+1 555-012-3456",
    address: "951 Chestnut St, San Jose, USA",
    status: "Banned",
    playlist: 4,
    type: "Producer",
    joinDate: "2023-08-30",
  },
];


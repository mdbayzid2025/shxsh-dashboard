import { Button, Table, Tooltip, Space } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import AddcategoryModal from "./AddcategoryModal";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);
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
      width: "85%"
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Tooltip title="Edit">
            <EditOutlined
              size={20}
              style={{ color: "orange", cursor: "pointer" }}
              onClick={() => {
                setSelectedCategory(record);
                setOpen(true)
                console.log("Edit category:", record);
              }}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteOutlined
              size={20}
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => console.log("Delete category:", record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  // Sample data for categories (you can replace this with your actual data)
  const dataSource = [
    {
      key: "1",
      name: "Category 1",
    },
    {
      key: "2",
      name: "Category 2",
    },
    {
      key: "3",
      name: "Category 3",
    },
    {
      key: "4",
      name: "Category 4",
    },
    {
      key: "5",
      name: "Category 5",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl text-primary font-semibold">Category Management</h1>
        <Button onClick={()=>setOpen(true)} type="primary" size="large">Add Category</Button>
      </div>

      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        pagination={{ pageSize: 10 }}
      />

      <AddcategoryModal  
      open={open}        
      onClose={() => setOpen(false)}
      editData={selectedCategory}      
      />
    </div>
  );
};

export default Categories;

import {
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Space, Table, Tooltip } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { TbMessageDots } from "react-icons/tb";
import ReportDetailsModal from "./ReportDetailsModal";
import FormItem from "antd/es/form/FormItem";

const Reports = () => {
    const [selectedReport, setSelectedReport] = useState(null);
    const [openWarning, setOpenWarning] = useState(false);
  
    const [openReportDetails, setOpenReportDetails] = useState(false);

  // ----------------- Column ----------------
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
      key: "joinDate",
      render: (text: string) => (
        <span>{dayjs(text).format("MMMM D, YYYY")}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Tooltip title="View">
            <EyeOutlined
              size={20}
              style={{ color: "#1890ff", cursor: "pointer" }}
              onClick={() => {setOpenReportDetails(true); setSelectedReport(record)}}
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
              onClick={() => {setSelectedReport(record); setOpenWarning(true)}}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl text-white font-semibold">Report</h1>
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
              className="!bg-[#808080] !w-[50px] !h-[48px] !rounded-none !rounded-r-md"
            />
          </div>
      </div>
      <WarningModal
        open={openWarning}
        setOpen={setOpenWarning}
        onSubmit={(reason) => console.log("Warning reason:", reason)}
      />

      <ReportDetailsModal
        open={openReportDetails}
        setOpen={setOpenReportDetails}
        data={selectedReport}
        onClose={() => setOpenReportDetails(false)}
      />
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        pagination={{ pageSize: 10 }}
      />
      ;
    </div>
  );
};

export default Reports;



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
      title={<p className="text-2xl font-semibold text-red-400">Warning</p>}
      open={open}
      onCancel={handleClose}
      footer={false}
      centered
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        style={{ marginTop: 10 }}
      >
        <FormItem
          label={
            <p className="text-white font-semibold text-lg mb-5">
              Warning Message
            </p>
          }
          name="reason"
          rules={[{ required: true, message: "Please enter warning reason" }]}
        >
          <Input
            placeholder="Enter warning reason"
            style={{ height: 48,  }}
          />
        </FormItem>

        <div className="flex justify-center">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            style={{ width: "100%", marginTop: 30 }}
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
    status: "Active",
    reason: "Spam or Irrelevent",
    reportDate: "2024-01-15",
  },
  {
    key: 2,
    name: "Emma Johnson",
    status: "Banned",
    reason: "Spam or Irrelevent",
    reportDate: "2023-11-22",
  },
  {
    key: 3,
    name: "Liam Brown",
    status: "Active",
    reason: "Spam or Irrelevent",
    reportDate: "2024-03-09",
  },
  {
    key: 4,
    name: "Olivia Davis",
    status: "Active",
    reason: "Spam or Irrelevent",
    reportDate: "2024-05-01",
  },
  {
    key: 5,
    name: "Noah Wilson",
    status: "Banned",
    reason: "Spam or Irrelevent",
    reportDate: "2023-12-17",
  },
  {
    key: 6,
    name: "Ava Martinez",
    status: "Active",
    reason: "Spam or Irrelevent",
    reportDate: "2024-07-20",
  },
  {
    key: 7,
    name: "Ethan Anderson",
    status: "Banned",
    reason: "Spam or Irrelevent",
    reportDate: "2023-09-05",
  },
  {
    key: 8,
    name: "Sophia Thomas",
    status: "Active",
    reason: "Spam or Irrelevent",
    reportDate: "2024-02-12",
  },
  {
    key: 9,
    name: "Mason Taylor",
    status: "Active",
    reason: "Spam or Irrelevent",
    reportDate: "2024-04-28",
  },
  {
    key: 10,
    name: "Isabella Moore",
    status: "Banned",
    reason: "Spam or Irrelevent",
    reportDate: "2023-08-30",
  },
];

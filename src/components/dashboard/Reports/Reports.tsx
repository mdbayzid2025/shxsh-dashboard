import { EyeOutlined, SearchOutlined, StopOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Space, Table, Tooltip } from "antd";
import FormItem from "antd/es/form/FormItem";
import dayjs from "dayjs";
import { useState } from "react";
import { TbMessageDots } from "react-icons/tb";
import { useGetReportsQuery, useUpdateReportMutation } from "../../../redux/features/reports/reportsApi";
import ReportDetailsModal from "./ReportDetailsModal";
import toast from "react-hot-toast";

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [openWarning, setOpenWarning] = useState(false);

  const [openReportDetails, setOpenReportDetails] = useState(false);
  const { data: reportData, isLoading } = useGetReportsQuery(undefined);
  const [updateReport] = useUpdateReportMutation();


  const handleChangeStatus = async (id:string) => {
    try {
      const res = await updateReport({id, status: "rejected"}).unwrap();
      console.log(" add ", res);  
      setSelectedReport(null)      
    } catch (error: any) {
      toast.error(error?.data?.message)
    }
  };

  // ----------------- Column ----------------
  
  const columns = [
    {
      title: "Name",
      dataIndex: "reporter",
      key: "reporter",
      render: (reporter: any) => reporter.firstName + " " + reporter.lastName,
    },
    {
      title: "Reason",
      dataIndex: "reportedReason",
      key: "reportedReason",
    },
    {
      title: "Report Date",
      render: (_: any, record: any) => (
        <span>
          {dayjs(record.createdAt || record.updatedAt).format("MMMM D, YYYY")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: string) => (
        <span
          className={`capitalize ${
            text == "pending" ? "text-orange-600" : "text-green-600"
          }`}
        >
          {text}
        </span>
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
              onClick={() => {
                setOpenReportDetails(true);
                setSelectedReport(record);
              }}
            />
          </Tooltip>
          <Tooltip title="Ignore">
            <StopOutlined
              size={20}
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => handleChangeStatus(record?._id)}
            />
          </Tooltip>
          <Tooltip title="Warning">
            <TbMessageDots
              size={20}
              style={{ color: "orange", cursor: "pointer" }}
              onClick={() => {
                setSelectedReport(record);
                setOpenWarning(true);
              }}
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
        data={selectedReport}
        setSelectedReport={setSelectedReport}
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
        dataSource={reportData?.data}
        columns={columns}
        loading={isLoading}
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
  data: any,
  setOpen: (open: boolean) => void;
  setSelectedReport: (data:any) => void;
  onSubmit: (reason: string) => void;
}

const WarningModal = ({ open, setOpen, setSelectedReport, data }: WarningModalProps) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [updateReport] = useUpdateReportMutation()

  const handleClose = () => {
    form.resetFields();
    setOpen(false);
  };

  const handleFinish = async (values: { reason: string }) => {
    setLoading(true);
    try {
      const res = await updateReport({
        id: data?._id, 
        status: "resolved", 
        feedBack: values?.reason
      }).unwrap();

      console.log("res res", res);
      form.resetFields();
      setOpen(false);
      setSelectedReport(null);
    } catch(error : any) {      
      toast.error(error?.data?.message);
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
          <Input placeholder="Enter warning reason" style={{ height: 48 }} />
        </FormItem>

        <div className="flex justify-center">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            style={{ width: "100%", marginTop: 30 }}
            loading={loading}
          >
            Resolved
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
